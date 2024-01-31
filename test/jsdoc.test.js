const assert = require('assert');
const path = require('path');
const {findRules, runLint, validateConfig} = require('./lib');

const configFile = path.resolve(__dirname, '../lib/jsdoc.js');

describe('jsdoc', () => {

  it('should be valid.', async () => {
    let err = null;

    try {
      const config = await validateConfig(configFile);

      assert(config);
    }
    catch (error) {
      err = error;
    }

    assert(err === null);
  });

  it('should not use deprecated rules.', async () => {
    const rules = await findRules('deprecated', configFile, {
      filterPrefix: /^jsdoc\//
    });

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should not be unused rules.', async () => {
    const rules = await findRules('unused', configFile, {
      filterPrefix: /^jsdoc\//
    });

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should has no errors and no warnings in jsdoc.valid.js', async () => {
    const file = path.resolve(__dirname, './fixture/jsdoc.valid.js');
    const results = await runLint(file, configFile);

    assert.deepEqual(results.errors, []);
    assert.deepEqual(results.warnings, []);
  });

  it('should has some errors and warnings in jsdoc.invalid.js', async () => {
    const file = path.resolve(__dirname, './fixture/jsdoc.invalid.js');
    const results = await runLint(file, configFile);

    assert.deepEqual(results.errors, [
      //  Note: This rule currently does not work in ESLint 8
      // 'jsdoc/check-examples',
      'jsdoc/check-syntax',
      'jsdoc/require-description'
    ]);
    assert.deepEqual(results.warnings, [
      'jsdoc/require-returns',
      'jsdoc/check-types',
      'jsdoc/check-tag-names'
    ]);
  });

});
