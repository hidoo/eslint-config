import jsdocPlugin from 'eslint-plugin-jsdoc';

/**
 * recommended config
 *
 * @type {import('eslint').ESLint.Plugin.ConfigData}
 */
const recommended = jsdocPlugin.configs['flat/recommended'];

/**
 * config for jsdoc
 *
 * @type {import('eslint').Linter.FlatConfig}
 */
export default {
  ...recommended,
  settings: {
    jsdoc: {
      tagNamePreference: {
        returns: 'return'
      },
      preferredTypes: {
        boolean: 'Boolean',
        string: 'String',
        number: 'Number',
        object: 'Object'
      }
    }
  },
  rules: {
    ...recommended.rules,

    //  Note: This rule currently does not work in ESLint 8
    // 'jsdoc/check-examples': ['error', {
    //   rejectExampleCodeRegex: '^```([a-z0-9]+)?\n(.*\n)*```'
    // }],
    'jsdoc/check-indentation': 'off',
    'jsdoc/check-syntax': 'error',
    'jsdoc/match-description': 'off',
    'jsdoc/no-defaults': 'warn',
    'jsdoc/no-types': 'off',
    'jsdoc/no-undefined-types': 'off',
    'jsdoc/require-description': [
      'error',
      {
        descriptionStyle: 'body'
      }
    ],
    'jsdoc/require-description-complete-sentence': 'off',
    'jsdoc/require-example': 'off',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/tag-lines': [
      'warn',
      'never',
      {
        startLines: 1,
        endLines: 0,
        tags: {
          example: {
            lines: 'never'
          }
        }
      }
    ]
  }
};
