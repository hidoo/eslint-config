const assert = require('assert'),
      path = require('path'),
      config = require('../lib/jsdoc'),
      {findRules, runLint, validate} = require('./lib');

const configFile = path.resolve(__dirname, '../lib/jsdoc.js');

describe('jsdoc', () => {

  it('should be valid.', () => {
    validate(config);
  });

  it('should not use deprecated rules.', () => {
    const rules = findRules('deprecated', configFile, {filterPrefix: /^jsdoc\//});

    assert(Array.isArray(rules));
    assert.deepStrictEqual(rules, []);
  });

  it('should not be unused rules.', () => {
    const rules = findRules('unused', configFile, {filterPrefix: /^jsdoc\//});

    assert(Array.isArray(rules));
    assert.deepStrictEqual(rules, []);
  });

  it('should has no errors and no warnings in jsdoc.valid.js', async () => {
    const file = path.resolve(__dirname, './fixture/jsdoc.valid.js'),
          results = await runLint(file, configFile);

    assert.deepStrictEqual(results.errors, []);
    assert.deepStrictEqual(results.warnings, []);
  });

  it('should has some errors and warnings in jsdoc.invalid.js', async () => {
    const file = path.resolve(__dirname, './fixture/jsdoc.invalid.js'),
          results = await runLint(file, configFile);

    assert.deepStrictEqual(results.errors, [
      'jsdoc/check-examples',
      'jsdoc/check-syntax',
      'jsdoc/require-description'
    ]);
    assert.deepStrictEqual(results.warnings, [
      'jsdoc/require-returns',
      'jsdoc/check-types',
      'jsdoc/check-tag-names'
    ]);
  });

});
