import baseConfig from './lib/base.js';
import importConfig from './lib/import.js';
import jsdocConfig from './lib/jsdoc.js';
import sortClassMembersConfig from './lib/sort-class-members.js';
import compatibilityConfig from './+compatibility.js';
import mochaConfig from './+mocha.js';
import nodeConfig from './+node.js';
import prettierConfig from './+prettier.js';
import stylisticConfig from './+stylistic.js';
import configs from './index.js';

/**
 * config for this project
 *
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  ...configs.map((cfg) => {
    return {
      files: ['**/*.js', '!test/fixture/*.js'],
      ...cfg
    };
  }),
  {
    files: ['**/*.js', '!test/fixture/*.js'],
    ...prettierConfig
  },

  // for lib
  {
    files: ['*.js', 'lib/**/*.js', 'test/lib/**/*.js', '**/*.test.js'],
    ...nodeConfig,
    rules: {
      ...nodeConfig.rules,
      'import/no-anonymous-default-export': [
        'error',
        {
          allowArray: true,
          allowObject: true
        }
      ]
    }
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
    files: ['test/fixture/base.*.js'],
    ...baseConfig
  },
  {
    files: ['test/fixture/compatibility.*.js'],
    ...compatibilityConfig
  },
  {
    files: ['test/fixture/import.*.js'],
    ...importConfig
  },
  {
    files: ['test/fixture/jsdoc.*.js'],
    ...jsdocConfig
  },
  {
    files: ['test/fixture/mocha.*.js'],
    ...mochaConfig
  },
  {
    files: ['test/fixture/node.*.js'],
    ...nodeConfig,
    languageOptions: {
      ...nodeConfig.languageOptions,
      sourceType: 'commonjs',
      globals: {
        ...nodeConfig.languageOptions.globals,
        __dirname: 'readonly',
        __filename: 'readonly',
        exports: 'writable',
        module: 'readonly',
        require: 'readonly'
      }
    }
  },
  {
    files: ['test/fixture/sort-class-members.*.js'],
    ...sortClassMembersConfig,
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest'
      }
    }
  },
  {
    files: ['test/fixture/stylistic.*.js'],
    ...stylisticConfig,
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },
  {
    ignores: ['test/fixture/*.invalid.js', '*.json', '*.md']
  }
];
