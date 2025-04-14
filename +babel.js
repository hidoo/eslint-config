import parser from '@babel/eslint-parser';

/**
 * config with babel parser
 *
 * @type {import('eslint').Linter.Config}
 */
export default {
  languageOptions: {
    parser,
    parserOptions: {
      requireConfigFile: false
    }
  }
};
