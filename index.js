const path = require('path');
const baseConfig = require('./lib/base');

module.exports = {
  ...baseConfig,
  'extends': [
    path.resolve(__dirname, 'lib', 'eslint-comments.js'),
    path.resolve(__dirname, 'lib', 'import.js'),
    path.resolve(__dirname, 'lib', 'jsdoc.js'),
    path.resolve(__dirname, 'lib', 'sort-class-members.js')
  ]
};
