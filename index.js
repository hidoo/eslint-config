const path = require('path');
const { env, parserOptions } = require('./lib/base');

module.exports = {
  env,
  parserOptions,
  extends: [
    path.resolve(__dirname, 'lib', 'base.js'),
    path.resolve(__dirname, 'lib', 'import.js'),
    path.resolve(__dirname, 'lib', 'jsdoc.js'),
    path.resolve(__dirname, 'lib', 'sort-class-members.js')
  ]
};
