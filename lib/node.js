const { parserOptions } = require('./base');

module.exports = {
  extends: ['plugin:n/recommended'],
  env: {
    node: true
  },
  parserOptions: {
    ...parserOptions,
    ecmaFeatures: {
      ...parserOptions.ecmaFeatures,
      impliedStrict: true
    }
  },
  rules: {
    // eslint core
    'no-console': 'off',

    // eslint-plugin-n
    'n/no-callback-literal': 'error',
    'n/no-unsupported-features/es-builtins': 'off',
    'n/no-unsupported-features/es-syntax': 'off',
    'n/exports-style': ['error', 'module.exports'],
    'n/file-extension-in-import': [
      'error',
      'always',
      {
        '.js': 'never'
      }
    ],
    'n/no-missing-import': 'off',
    'n/no-missing-require': 'off',
    'n/prefer-global/buffer': ['error', 'always'],
    'n/prefer-global/console': ['error', 'always'],
    'n/prefer-global/process': ['error', 'always'],
    'n/prefer-global/text-decoder': ['error', 'always'],
    'n/prefer-global/text-encoder': ['error', 'always'],
    'n/prefer-global/url-search-params': ['error', 'always'],
    'n/prefer-global/url': ['error', 'always'],
    'n/prefer-promises/dns': 'off',
    'n/prefer-promises/fs': 'off',

    'n/callback-return': 'error',
    'n/global-require': 'error',
    'n/handle-callback-err': ['error', '^(err|error)$'],
    'n/no-mixed-requires': 'error',
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
    'n/no-process-env': 'warn',
    'n/no-process-exit': 'error',
    'n/no-restricted-import': 'off',
    'n/no-restricted-require': 'off',
    'n/no-sync': 'warn'
  }
};
