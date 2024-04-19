import { builtinRules } from 'eslint/use-at-your-own-risk';
import { calculateConfig } from './calculateConfig.js';

/**
 * default options
 *
 * @type {Object}
 */
const defaultOptions = {
  filterPrefix: ''
};

/**
 * get available rules from config object
 *
 * @param {Object} config config object
 * @return {Map}
 */
function getAvailableRules(config = {}) {
  const pluginRules = new Map();

  if (config.plugins) {
    Object.entries(config.plugins).forEach(([prefix, { rules }]) => {
      if (prefix === '@') {
        return;
      }

      Object.entries(rules).forEach(([name, rule]) => {
        pluginRules.set(`${prefix}/${name}`, rule);
      });
    });
  }

  return new Map([...builtinRules, ...pluginRules]);
}

/**
 * get deprecated rules
 *
 * @param {String} configFile config file path
 * @return {Array<String>}
 */
async function getDeprecatedRules(configFile) {
  const config = await calculateConfig([(await import(configFile)).default]);
  const currentRules = Object.keys(config.rules);
  const deprecatedRules = [];

  getAvailableRules(config).forEach((rule, key) => {
    if (rule.meta.deprecated && currentRules.includes(key)) {
      deprecatedRules.push(key);
    }
  });

  return deprecatedRules;
}

/**
 * get unused rules
 *
 * @param {String} configFile config file path
 * @return {Array<String>}
 */
async function getUnusedRules(configFile) {
  const config = await calculateConfig([(await import(configFile)).default]);
  const currentRules = Object.keys(config.rules);
  const unusedRules = [];

  getAvailableRules(config).forEach((rule, key) => {
    if (!rule.meta.deprecated && !currentRules.includes(key)) {
      unusedRules.push(key);
    }
  });

  return unusedRules;
}

/**
 * find rules by type
 *
 * @param {String} type type of rules
 * @param {String} configFile file path of config
 * @param {Object} options options
 * @param {String|RegExp} options.filterPrefix filter prefix
 * @return {Promise<Array>} list of ruleIds
 */
export async function findRules(
  type = 'deprecated',
  configFile = '',
  options = {}
) {
  const { filterPrefix } = { ...defaultOptions, ...options };
  let rules = [];

  if (type === 'unused') {
    rules = await getUnusedRules(configFile);
  } else if (type === 'deprecated') {
    rules = await getDeprecatedRules(configFile);
  } else {
    throw new TypeError('Argument "type" is not supported value.');
  }

  if (filterPrefix instanceof RegExp) {
    return rules.filter((rule) => filterPrefix.test(rule));
  } else if (typeof filterPrefix === 'string' && filterPrefix !== '') {
    return rules.filter((rule) => rule.indexOf(filterPrefix) === 0); // eslint-disable-line no-magic-numbers
  }
  return rules;
}
