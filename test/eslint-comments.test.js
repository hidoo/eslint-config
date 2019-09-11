const assert = require('assert'),
      path = require('path'),
      config = require('../lib/eslint-comments'),
      {findRules, runLint, validate} = require('./lib');

const configFile = path.resolve(__dirname, '../lib/eslint-comments.js');

describe('eslint-comments', () => {

  it('should be valid.', () => {
    validate(config);
  });

  it('should not use deprecated rules.', () => {
    const rules = findRules('deprecated', configFile, {
      filterPrefix: /^eslint-comments\//
    });

    assert(Array.isArray(rules));
    assert.deepStrictEqual(rules, []);
  });

  it('should not be unused rules.', () => {
    const rules = findRules('unused', configFile, {
      filterPrefix: /^eslint-comments\//
    });

    assert(Array.isArray(rules));
    assert.deepStrictEqual(rules, []);
  });

  it('should has no errors and no warnings in eslint-comments.valid.js', async () => {
    const file = path.resolve(__dirname, './fixture/eslint-comments.valid.js'),
          results = await runLint(file, configFile);

    assert.deepStrictEqual(results.errors, []);
    assert.deepStrictEqual(results.warnings, []);
  });

  it('should has some errors and warnings in eslint-comments.invalid.js', async () => {
    const file = path.resolve(__dirname, './fixture/eslint-comments.invalid.js'),
          results = await runLint(file, configFile);

    assert.deepStrictEqual(results.errors, [
      'eslint-comments/no-unused-disable'
    ]);
    assert.deepStrictEqual(results.warnings, []);
  });

});
