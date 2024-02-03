const path = require('path');

module.exports = {
  root: true,
  extends: [
    path.resolve(__dirname, 'index.js'),
    path.resolve(__dirname, '+prettier.js')
  ],
  overrides: [
    // for lib
    {
      files: ['*.js', 'lib/**/*.js', 'test/lib/**/*.js'],
      extends: [path.resolve(__dirname, '+node.js')]
    },
    // for mocha
    {
      files: ['**/*.test.js'],
      extends: [
        path.resolve(__dirname, '+mocha.js'),
        path.resolve(__dirname, '+node.js')
      ]
    },
    // for fixtures
    {
      files: ['test/fixture/*.js'],
      extends: [path.resolve(__dirname, '+node.js')],
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'import/no-unresolved': 'off'
      }
    },
    {
      files: ['test/fixture/base.*.js'],
      rules: {
        'jsdoc/require-jsdoc': 'off'
      }
    },
    {
      files: [
        'test/fixture/eslint-comments.*.js',
        'test/fixture/jsdoc.*.js',
        'test/fixture/import.*.js'
      ],
      rules: {
        'no-var': 'off'
      }
    },
    {
      files: ['test/fixture/node.*.js'],
      rules: {
        'no-var': 'off',
        'no-unused-vars': 'off'
      }
    },
    {
      files: ['test/fixture/mocha.*.js'],
      extends: [path.resolve(__dirname, '+mocha.js')]
    },
    {
      files: ['test/fixture/sort-class-members.*.js'],
      extends: [path.resolve(__dirname, '+babel.js')],
      rules: {
        'no-var': 'off',
        'no-unused-vars': 'off'
      }
    }
  ]
};
