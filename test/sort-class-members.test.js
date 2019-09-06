const assert = require('assert'),
      path = require('path'),
      config = require('../lib/sort-class-members'),
      {findRules, runLint, validate} = require('./lib');

const configFile = path.resolve(__dirname, '../lib/sort-class-members.js');

describe('sort-class-members', () => {

  it('should be valid.', () => {
    validate(config);
  });

  it('should not use deprecated rules.', () => {
    const rules = findRules('deprecated', configFile, {
      filterPrefix: /^sort-class-members\//
    });

    assert(Array.isArray(rules));
    assert.deepStrictEqual(rules, []);
  });

  it('should not be unused rules.', () => {
    const rules = findRules('unused', configFile, {
      filterPrefix: /^sort-class-members\//
    });

    assert(Array.isArray(rules));
    assert.deepStrictEqual(rules, []);
  });

  it('should has no errors and no warnings in sort-class-members.valid.js', async () => {
    const file = path.resolve(__dirname, './fixture/sort-class-members.valid.js'),
          results = await runLint(file, configFile, {parser: 'babel-eslint'});

    assert.deepStrictEqual(results.errors, []);
    assert.deepStrictEqual(results.warnings, []);
  });

});
