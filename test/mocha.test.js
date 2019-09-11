const assert = require('assert'),
      path = require('path'),
      config = require('../lib/mocha'),
      {findRules, runLint, validate} = require('./lib');

const configFile = path.resolve(__dirname, '../lib/mocha.js');

describe('mocha', () => {

  it('should be valid.', () => {
    validate(config);
  });

  it('should not use deprecated rules.', () => {
    const rules = findRules('deprecated', configFile, {filterPrefix: /^mocha\//});

    assert(Array.isArray(rules));
    assert.deepStrictEqual(rules, []);
  });

  it('should not be unused rules.', () => {
    const rules = findRules('unused', configFile, {filterPrefix: /^mocha\//});

    assert(Array.isArray(rules));
    assert.deepStrictEqual(rules, []);
  });

  it('should has no errors and no warnings in mocha.valid.js', async () => {
    const file = path.resolve(__dirname, './fixture/mocha.valid.js'),
          results = await runLint(file, configFile, {parserOptions: {ecmaVersion: 2019}});

    assert.deepStrictEqual(results.errors, []);
    assert.deepStrictEqual(results.warnings, []);
  });

  it('should has some errors and warnings in mocha.invalid.js', async () => {
    const file = path.resolve(__dirname, './fixture/mocha.invalid.js'),
          results = await runLint(file, configFile, {parserOptions: {ecmaVersion: 2019}});

    assert.deepStrictEqual(results.errors, [
      'mocha/prefer-arrow-callback'
    ]);
    assert.deepStrictEqual(results.warnings, []);
  });

});
