module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
    jquery: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  extends: [
    './lib/base.js'
  ]
};
