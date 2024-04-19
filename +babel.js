import parser from '@babel/eslint-parser';

/**
 * config with babel parser
 *
 * @type {import('eslint').Linter.FlatConfig}
 */
export default {
  languageOptions: {
    parser,
    parserOptions: {
      requireConfigFile: false
    }
  }
};
