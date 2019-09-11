const getRuleFinder = require('eslint-find-rules');

/**
 * default options
 *
 * @type {Object}
 */
const defaultOptions = {
  filterPrefix: ''
};

/**
 * find rules by type
 *
 * @param {String} [type='deprecated'] type of rules
 * @param {String} [configFile=''] file path of config
 * @param {Object} [options={}] options
 * @param {String|RegExp} options.filterPrefix filter prefix
 * @return {Array} list of ruleIds
 */
module.exports = function findRules(type = 'deprecated', configFile = '', options = {}) {
  const ruleFinder = getRuleFinder(configFile),
        {filterPrefix} = Object.assign(defaultOptions, options);
  let rules = [];

  if (type === 'unused') {
    rules = ruleFinder.getUnusedRules();
  }
  else if (type === 'deprecated') {
    rules = ruleFinder.getDeprecatedRules();
  }
  else {
    throw new TypeError('Argument "type" is not supported value.');
  }

  if (filterPrefix instanceof RegExp) {
    return rules.filter((rule) => filterPrefix.test(rule));
  }
  else if (typeof filterPrefix === 'string' && filterPrefix !== '') {
    return rules.filter((rule) => rule.indexOf(filterPrefix) === 0); // eslint-disable-line no-magic-numbers
  }
  return rules;
};
