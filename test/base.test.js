const assert = require('assert'),
      path = require('path'),
      config = require('../lib/base'),
      {findRules, runLint, validate} = require('./lib');

const configFile = path.resolve(__dirname, '../lib/base.js');

describe('base', () => {

  it('should be valid.', () => {
    validate(config);
  });

  it('should not use deprecated rules.', () => {
    const rules = findRules('deprecated', configFile);

    assert(Array.isArray(rules));
    assert.deepStrictEqual(rules, []);
  });

  it('should not be unused rules.', () => {
    const rules = findRules('unused', configFile);

    assert(Array.isArray(rules));
    assert.deepStrictEqual(rules, []);
  });

  it('should has no errors and no warnings in base.valid.js', async () => {
    const file = path.resolve(__dirname, './fixture/base.valid.js'),
          results = await runLint(file, configFile);

    assert.deepStrictEqual(results.errors, []);
    assert.deepStrictEqual(results.warnings, []);
  });

  it('should has some errors and warnings in base.invalid.js', async () => {
    const file = path.resolve(__dirname, './fixture/base.invalid.js'),
          results = await runLint(file, configFile);

    assert.deepStrictEqual(results.errors, [
      'func-names',
      'function-paren-newline',
      'line-comment-position',
      'lines-between-class-members',
      'newline-per-chained-call',
      'object-curly-newline',
      'grouped-accessor-pairs',
      'no-constructor-return',
      'no-dupe-else-if',
      'no-setter-return',
      'prefer-exponentiation-operator'
    ]);
    assert.deepStrictEqual(results.warnings, []);
  });

});
