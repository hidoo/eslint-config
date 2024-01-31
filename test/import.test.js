const assert = require('assert');
const path = require('path');
const { findRules, runLint, validateConfig } = require('./lib');

const configFile = path.resolve(__dirname, '../lib/import.js');

describe('import', () => {
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
      filterPrefix: /^import\//
    });

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should not be unused rules.', async () => {
    const rules = await findRules('unused', configFile, {
      filterPrefix: /^import\//
    });

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should has some errors and warnings in import.invalid.js', async () => {
    const file = path.resolve(__dirname, './fixture/import.invalid.js');
    const results = await runLint(file, configFile, {
      overrideConfig: {
        parserOptions: {
          ecmaVersion: 'latest'
        }
      }
    });

    assert.deepEqual(results.errors, [
      'import/no-absolute-path',
      'import/no-webpack-loader-syntax',
      'import/no-self-import',
      // 'import/no-cycle'
      'import/no-mutable-exports',
      'import/no-amd',
      'import/first',
      'import/newline-after-import',
      'import/no-useless-path-segments',
      'import/no-anonymous-default-export'
    ]);
    assert.deepEqual(results.warnings, ['import/no-dynamic-require']);
  });
});
