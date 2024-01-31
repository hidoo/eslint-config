module.exports = {
  'extends': [
    'plugin:mocha/recommended'
  ],
  'env': {
    mocha: true
  },
  'plugins': [
    'mocha'
  ],
  'rules': {
    // eslint core
    'prefer-arrow-callback': 'off',
    'max-len': 'off',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'no-magic-numbers': 'off',

    // eslint-plugin-mocha
    'mocha/no-mocha-arrows': 'off',
    'mocha/no-return-from-async': 'off',
    'mocha/prefer-arrow-callback': 'error'
  }
};
