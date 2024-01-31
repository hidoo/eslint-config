const { ESLint } = require('eslint');

/**
 * options
 *
 * @type {Object}
 */
const SEVERITY = {
  ERROR: 2,
  WARNING: 1
};

/**
 * options
 *
 * @type {Object}
 */
const defaultOptions = {
  useEslintrc: false,
  ignore: false,
  errorOnUnmatchedPattern: true
};

/**
 * run lint
 *
 * @param {String|Array<String>} patterns file patterns
 * @param {String} configFile file path of config
 * @param {Object} options options
 * @return {Promise<Object>} object has list that each severity messages
 */
module.exports = async function runLint(
  patterns = '',
  configFile = '',
  options = {}
) {
  const eslint = new ESLint({
    ...defaultOptions,
    ...options,
    overrideConfigFile: configFile
  });
  const results = await eslint.lintFiles(patterns);

  return results.reduce(
    (prev, { messages }) => {
      const errors = new Set(prev.errors);
      const warnings = new Set(prev.warnings);
      const unknown = new Set(prev.unknown);

      messages.forEach((message) => {
        const { fatal, ruleId, severity } = message;

        if (fatal) {
          throw Error(message.message);
        }

        if (severity === SEVERITY.ERROR) {
          errors.add(ruleId);
        } else if (severity === SEVERITY.WARNING) {
          warnings.add(ruleId);
        } else {
          unknown.push(ruleId);
        }
      });

      return {
        errors: [...errors.values()],
        warnings: [...warnings.values()],
        unknown: [...unknown]
      };
    },
    { errors: [], warnings: [], unknown: [] }
  );
};
