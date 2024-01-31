module.exports = {
  extends: ['plugin:jsdoc/recommended'],
  plugins: ['jsdoc'],
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
