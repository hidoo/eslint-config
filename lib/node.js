const {env, parserOptions} = require('./base');

module.exports = {
  'extends': [
    'plugin:node/recommended'
  ],
  'plugins': [
    'node'
  ],
  'env': Object.assign(env, {
    browser: false,
    commonjs: false,
    node: true
  }),
  'parserOptions': Object.assign(parserOptions, {
    ecmaFeatures: Object.assign(parserOptions.ecmaFeatures, {
      impliedStrict: true
    })
  }),
  'rules': {
    // eslint core
    'no-console': 'off',

    // eslint-plugin-node
    'node/no-callback-literal': 'error',
    'node/no-unsupported-features/es-builtins': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/exports-style': ['error', 'module.exports'],
    'node/file-extension-in-import': ['error', 'always', {
      '.js': 'never'
    }],
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
    'node/prefer-promises/fs': 'off'
  }
};
