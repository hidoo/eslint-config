import mochaPlugin from 'eslint-plugin-mocha';

/**
 * recommended config
 *
 * @type {import('eslint').ESLint.Plugin.ConfigData}
 */
const { recommended } = mochaPlugin.configs.flat;

/**
 * config for mocha
 *
 * @type {import('eslint').Linter.FlatConfig}
 */
export default {
  ...recommended,
  rules: {
    ...recommended.rules,

    // eslint core
    'prefer-arrow-callback': 'off',
    'max-len': 'off',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'no-magic-numbers': 'off',

    // eslint-plugin-mocha
    'mocha/no-mocha-arrows': 'off',
    'mocha/no-return-from-async': 'off',
    'mocha/prefer-arrow-callback': 'error'
  }
};
