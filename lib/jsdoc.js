module.exports = {
  'extends': [
    'plugin:jsdoc/recommended'
  ],
  'plugins': [
    'jsdoc'
  ],
  'settings': {
    jsdoc: {
      tagNamePreference: {
        returns: 'return'
      },
      preferredTypes: {
        'boolean': 'Boolean',
        'string': 'String',
        'number': 'Number',
        'object': 'Object'
      }
    }
  },
  'rules': {
    'jsdoc/check-examples': ['error', {
      rejectExampleCodeRegex: '^```([a-z0-9]+)?\n(.*\n)*```'
    }],
    'jsdoc/check-indentation': 'off',
    'jsdoc/check-syntax': 'error',
    'jsdoc/match-description': 'off',
    'jsdoc/no-types': 'off',
    'jsdoc/no-undefined-types': 'off',
    'jsdoc/require-description': ['error', {
      descriptionStyle: 'body'
    }],
    'jsdoc/require-description-complete-sentence': 'off',
    'jsdoc/require-example': 'off',
    'jsdoc/require-returns-description': 'off'
  }
};
