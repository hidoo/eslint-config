const assert = require('assert');
const path = require('path');
const {findRules, runLint, validateConfig} = require('./lib');

const configFile = path.resolve(__dirname, '../lib/mocha.js');

describe('mocha', () => {

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

  it('should not use deprecated rules.', async() => {
    const rules = await findRules('deprecated', configFile, {
      filterPrefix: /^mocha\//
    });

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should not be unused rules.', async() => {
    const rules = await findRules('unused', configFile, {
      filterPrefix: /^mocha\//
    });

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should has no errors and no warnings in mocha.valid.js', async () => {
    const file = path.resolve(__dirname, './fixture/mocha.valid.js');
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

  it('should has some errors and warnings in mocha.invalid.js', async () => {
    const file = path.resolve(__dirname, './fixture/mocha.invalid.js');
    const results = await runLint(file, configFile, {
      overrideConfig: {
        parserOptions: {
          ecmaVersion: 'latest'
        }
      }
    });

    assert.deepEqual(results.errors, [
      'mocha/prefer-arrow-callback'
    ]);
    assert.deepEqual(results.warnings, []);
  });

});
