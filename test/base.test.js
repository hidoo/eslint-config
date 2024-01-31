const assert = require('assert');
const path = require('path');
const { findRules, runLint, validateConfig } = require('./lib');

const configFile = path.resolve(__dirname, '../lib/base.js');

describe('base', () => {
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
    const rules = await findRules('deprecated', configFile);

    assert(Array.isArray(rules));
    assert.deepEqual(rules, [
      // DEPRECATED but included in eslint:recommended
      'no-extra-semi',
      'no-mixed-spaces-and-tabs'
    ]);
  });

  it('should not be unused rules.', async () => {
    const rules = await findRules('unused', configFile);

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should has no errors and no warnings in base.valid.js', async () => {
    const file = path.resolve(__dirname, './fixture/base.valid.js');
    const results = await runLint(file, configFile);

    assert.deepEqual(results.errors, []);
    assert.deepEqual(results.warnings, []);
  });

  it('should has some errors and warnings in base.invalid.js', async () => {
    const file = path.resolve(__dirname, './fixture/base.invalid.js');
    const results = await runLint(file, configFile);

    assert.deepEqual(results.errors, [
      'func-names',
      'line-comment-position',
      'grouped-accessor-pairs',
      'no-constructor-return',
      'no-dupe-else-if',
      'no-setter-return',
      'prefer-exponentiation-operator',
      'default-case-last',
      'no-useless-backreference'
    ]);
    assert.deepEqual(results.warnings, []);
  });
});
