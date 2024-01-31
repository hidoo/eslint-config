const assert = require('assert');
const path = require('path');
const {findRules, runLint, validateConfig} = require('./lib');

const configFile = path.resolve(__dirname, '../lib/stylistic.js');

describe('stylistic', () => {

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
      filterPrefix: /^@stylistic\//
    });

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should not be unused rules.', async () => {
    const rules = await findRules('unused', configFile, {
      filterPrefix: /^@stylistic\//
    });

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should has no errors and no warnings in stylistic.valid.js', async () => {
    const file = path.resolve(__dirname, './fixture/stylistic.valid.js');
    const results = await runLint(file, configFile, {
      overrideConfig: {
        parserOptions: {
          ecmaVersion: 'latest'
        }
      }
    });

    assert.deepEqual(results.errors, []);
    assert.deepEqual(results.warnings, []);
  });

  it('should has some errors and warnings in stylistic.invalid.js', async () => {
    const file = path.resolve(__dirname, './fixture/stylistic.invalid.js');
    const results = await runLint(file, configFile, {
      overrideConfig: {
        parserOptions: {
          ecmaVersion: 'latest'
        }
      }
    });

    assert.deepEqual(results.errors, [
      '@stylistic/function-paren-newline',
      '@stylistic/lines-between-class-members',
      '@stylistic/newline-per-chained-call',
      '@stylistic/object-curly-newline'
    ]);
    assert.deepEqual(results.warnings, []);
  });

});
