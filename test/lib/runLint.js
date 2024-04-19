import { ESLint } from 'eslint';

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
export async function runLint(patterns = '', configFile = '', options = {}) {
  const { default: config } = await import(configFile);
  const eslint = new ESLint({
    ...defaultOptions,
    ...options,
    overrideConfigFile: true,
    baseConfig: [config]
  });
  const results = await eslint.lintFiles(patterns);

  return results.reduce(
    (prev, { messages }) => {
      const errors = new Set(prev.errors);
      const warnings = new Set(prev.warnings);
      const unknown = new Set(prev.unknown);
      const unusedDisableDirectives = new Set(prev.unusedDisableDirectives);

      messages.forEach((message) => {
        const { fatal, ruleId, severity } = message;

        if (fatal) {
          throw Error(message.message);
        }

        if (ruleId === null) {
          unusedDisableDirectives.add(message.message);
        } else if (severity === SEVERITY.ERROR) {
          errors.add(ruleId);
        } else if (severity === SEVERITY.WARNING) {
          warnings.add(ruleId);
        } else {
          unknown.add(ruleId);
        }
      });

      return {
        errors: [...errors.values()],
        warnings: [...warnings.values()],
        unknown: [...unknown.values()],
        unusedDisableDirectives: [...unusedDisableDirectives.values()]
      };
    },
    { errors: [], warnings: [], unknown: [], unusedDisableDirectives: [] }
  );
}
