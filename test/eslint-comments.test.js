const assert = require('assert');
const path = require('path');
const { findRules, runLint, validateConfig } = require('./lib');

const configFile = path.resolve(__dirname, '../lib/eslint-comments.js');

describe('eslint-comments', () => {
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
      filterPrefix: /^eslint-comments\//
    });

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should not be unused rules.', async () => {
    const rules = await findRules('unused', configFile, {
      filterPrefix: /^eslint-comments\//
    });

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should has no errors and no warnings in eslint-comments.valid.js', async () => {
    const file = path.resolve(__dirname, './fixture/eslint-comments.valid.js');
    const results = await runLint(file, configFile);

    assert.deepEqual(results.errors, []);
    assert.deepEqual(results.warnings, []);
  });

  it('should has some errors and warnings in eslint-comments.invalid.js', async () => {
    const file = path.resolve(
      __dirname,
      './fixture/eslint-comments.invalid.js'
    );
    const results = await runLint(file, configFile);

    assert.deepEqual(results.errors, ['eslint-comments/no-unused-disable']);
    assert.deepEqual(results.warnings, []);
  });
});
