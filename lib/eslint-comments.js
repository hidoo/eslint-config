module.exports = {
  'extends': [
    'plugin:eslint-comments/recommended'
  ],
  'plugins': [
    'eslint-comments'
  ],
  'rules': {
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-restricted-disable': 'off',
    'eslint-comments/no-use': 'off',
    'eslint-comments/require-description': 'off'
  }
};
