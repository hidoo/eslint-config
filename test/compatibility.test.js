const assert = require('assert');
const path = require('path');
const { findRules, runLint, validateConfig } = require('./lib');

const configFile = path.resolve(__dirname, '../lib/compatibility.js');

describe('compatibility', () => {
  it('should be valid.', async () => {
    let err = null;

    try {
      const config = await validateConfig(configFile);

      assert(config);
    } catch (error) {
      err = error;
    }

    assert(err === null);
  });

  it('should not use deprecated rules.', async () => {
    const rules = await findRules('deprecated', configFile, {
      filterPrefix: /^compat\//
    });

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should not be unused rules.', async () => {
    const rules = await findRules('unused', configFile, {
      filterPrefix: /^compat\//
    });

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should has some errors and warnings in compatibility.invalid.js', async () => {
    const file = path.resolve(__dirname, './fixture/compatibility.invalid.js');
    const results = await runLint(file, configFile, {
      cwd: __dirname
    });

    assert.deepEqual(results.errors, [], 'No errors.');
    assert.deepEqual(results.warnings, ['compat/compat'], 'Some errors.');
  });
});
