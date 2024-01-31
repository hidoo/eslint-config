const { parserOptions } = require('./base');

module.exports = {
  extends: ['plugin:node/recommended'],
  plugins: ['node'],
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

    // eslint-plugin-node
    'node/no-callback-literal': 'error',
    'node/no-unsupported-features/es-builtins': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/exports-style': ['error', 'module.exports'],
    'node/file-extension-in-import': [
      'error',
      'always',
      {
        '.js': 'never'
      }
    ],
    'node/no-missing-import': 'off',
    'node/no-missing-require': 'off',
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-global/text-decoder': ['error', 'always'],
    'node/prefer-global/text-encoder': ['error', 'always'],
    'node/prefer-global/url-search-params': ['error', 'always'],
    'node/prefer-global/url': ['error', 'always'],
    'node/prefer-promises/dns': 'off',
    'node/prefer-promises/fs': 'off',

    'node/callback-return': 'error',
    'node/global-require': 'error',
    'node/handle-callback-err': ['error', '^(err|error)$'],
    'node/no-mixed-requires': 'error',
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
    'node/no-process-env': 'warn',
    'node/no-process-exit': 'error',
    'node/no-restricted-import': 'off',
    'node/no-restricted-require': 'off',
    'node/no-sync': 'warn'
  }
};
