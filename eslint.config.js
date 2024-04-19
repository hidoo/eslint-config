import config from './index.js';
import babelConfig from './+babel.js';
import compatibilityConfig from './+compatibility.js';
import mochaConfig from './+mocha.js';
import nodeConfig from './+node.js';
import prettierConfig from './+prettier.js';

/**
 * config for this project
 *
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  ...config,
  prettierConfig,
  {
    ignores: ['test/fixture/*.invalid.js']
  },

  // for lib
  {
    files: ['*.js', 'lib/**/*.js', 'test/lib/**/*.js', '**/*.test.js'],
    ...nodeConfig
  },

  // for mocha
  {
    files: ['**/*.test.js'],
    ...mochaConfig,
    rules: {
      ...mochaConfig.rules,
      'no-console': 'off'
    }
  },

  // for fixtures
  {
    files: ['test/fixture/*.js'],
    rules: {
      'no-console': 'off',
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
    files: ['test/fixture/compatibility.*.js'],
    ...compatibilityConfig
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
    ...mochaConfig
  },
  {
    files: ['test/fixture/sort-class-members.*.js'],
    ...babelConfig,
    rules: {
      'no-var': 'off',
      'no-unused-vars': 'off'
    }
  }
];
