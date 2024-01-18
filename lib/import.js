const {parserOptions} = require('./base');

module.exports = {
  'extends': [
    'plugin:import/recommended'
  ],
  'plugins': [
    'import'
  ],
  'parserOptions': parserOptions,
  'rules': {
    // Static analysis
    'import/no-restricted-paths': 'off',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'warn',
    'import/no-internal-modules': 'off',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-relative-parent-imports': 'off',
    'import/no-unused-modules': 'off',
    'import/no-relative-packages': 'off',

    // Helpful warnings
    'import/no-deprecated': 'error',
    'import/no-empty-named-blocks': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-mutable-exports': 'error',

    // Module systems
    'import/unambiguous': 'off',
    'import/no-commonjs': 'off',
    'import/no-import-module-exports': 'error',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'off',

    // Style guide
    'import/consistent-type-specifier-style': 'off',
    'import/first': 'error',
    'import/exports-last': 'off',
    'import/no-namespace': 'off',
    'import/extensions': 'off',
    'import/order': 'error',
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'off',
    'import/max-dependencies': 'off',
    'import/no-unassigned-import': 'off',
    'import/no-named-default': 'off',
    'import/no-default-export': 'off',
    'import/no-named-export': 'off',
    'import/no-anonymous-default-export': 'error',
    'import/group-exports': 'off',
    'import/dynamic-import-chunkname': 'off'
  }
};
