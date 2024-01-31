const assert = require('assert');
const path = require('path');
const { findRules, runLint, validateConfig } = require('./lib');

const configFile = path.resolve(__dirname, '../lib/sort-class-members.js');

describe('sort-class-members', () => {
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
      filterPrefix: /^sort-class-members\//
    });

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should not be unused rules.', async () => {
    const rules = await findRules('unused', configFile, {
      filterPrefix: /^sort-class-members\//
    });

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should has no errors and no warnings in sort-class-members.valid.js', async () => {
    const file = path.resolve(
      __dirname,
      './fixture/sort-class-members.valid.js'
    );
    const results = await runLint(file, configFile, {
      overrideConfig: {
        parser: '@babel/eslint-parser',
        parserOptions: {
          ecmaVersion: 'latest',
          requireConfigFile: false
        }
      }
    });

    assert.deepEqual(results.errors, []);
    assert.deepEqual(results.warnings, []);
  });
});
