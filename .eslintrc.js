module.exports = {
  'root': true,
  'extends': [
    './index.js'
  ],
  'overrides': [
    // for lib
    {
      'files': [
        'lib/**/*.js',
        'test/lib/**/*.js'
      ],
      'extends': [
        './+node.js'
      ]
    },
    // for mocha
    {
      'files': [
        '**/*.test.js'
      ],
      'extends': [
        './+mocha.js'
      ]
    },
    // for fixtures
    {
      files: [
        'test/fixture/base.*.js'
      ],
      rules: {
        'jsdoc/require-jsdoc': 'off'
      }
    },
    {
      files: [
        'test/fixture/eslint-comments.*.js',
        'test/fixture/jsdoc.*.js',
        'test/fixture/import.*.js',
      ],
      rules: {
        'no-var': 'off',
        'no-unused-vars': 'off'
      }
    },
    {
      'files': [
        'test/fixture/node.*.js'
      ],
      'extends': [
        './+node.js'
      ],
      'rules': {
        'no-var': 'off',
        'no-unused-vars': 'off'
      }
    },
    {
      'files': [
        'test/fixture/mocha.*.js'
      ],
      'extends': [
        './+mocha.js'
      ]
    },
    {
      files: [
        'test/fixture/sort-class-members.*.js'
      ],
      'extends': [
        './+babel.js'
      ],
      rules: {
        'no-var': 'off',
        'no-unused-vars': 'off'
      }
    }
  ]
};
