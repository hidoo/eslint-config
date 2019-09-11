const {CLIEngine} = require('eslint');

/**
 * options
 *
 * @type {Object}
 */
const SEVERITY = {
        ERROR: 2,
        WARNING: 1
      },
      defaultOptions = {
        useEslintrc: false,
        ignore: false
      };

/**
 * run lint
 *
 * @param {String} [file=''] file path of fixture
 * @param {String} [configFile=''] file path of config
 * @param {Object} [options={}] options
 * @return {Object} object has list that each severity messages
 */
module.exports = function runLint(file = '', configFile = '', options = {}) {
  const cli = new CLIEngine(Object.assign(
          defaultOptions,
          options,
          {configFile}
        )),
        {results} = cli.executeOnFiles([file]);

  return results[0].messages.reduce((prev, message) => {
    const errors = new Set(prev.errors),
          warnings = new Set(prev.warnings),
          unknown = prev.unknown,
          {fatal, ruleId, severity} = message;

    if (fatal) {
      throw message;
    }

    if (severity === SEVERITY.ERROR) {
      errors.add(ruleId);
    }
    else if (severity === SEVERITY.WARNING) {
      warnings.add(ruleId);
    }
    else {
      unknown.push(ruleId);
    }

    return {
      errors: [...errors.values()],
      warnings: [...warnings.values()],
      unknown: [...unknown]
    };
  }, {errors: [], warnings: [], unknown: []});
};
