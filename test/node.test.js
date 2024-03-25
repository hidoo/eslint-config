const assert = require('assert');
const path = require('path');
const { findRules, runLint, validateConfig } = require('./lib');

const configFile = path.resolve(__dirname, '../lib/node.js');

describe('node', () => {
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
      filterPrefix: /^node\//
    });

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should not be unused rules.', async () => {
    const rules = await findRules('unused', configFile, {
      filterPrefix: /^node\//
    });

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should has no errors and no warnings in node.valid.js', async () => {
    const file = path.resolve(__dirname, './fixture/node.valid.js');
    const results = await runLint(file, configFile);

    assert.deepEqual(results.errors, []);
    assert.deepEqual(results.warnings, []);
  });

  it('should has some errors and warnings in node.invalid.js', async () => {
    const file = path.resolve(__dirname, './fixture/node.invalid.js');
    const results = await runLint(file, configFile);

    assert.deepEqual(results.errors, [
      'n/no-callback-literal',
      'n/exports-style',
      // 'n/file-extension-in-import',
      'n/prefer-global/buffer',
      'n/prefer-global/console',
      'n/prefer-global/process',
      'n/prefer-global/text-decoder',
      'n/prefer-global/text-encoder',
      'n/prefer-global/url-search-params',
      'n/prefer-global/url',
      'n/callback-return',
      'n/global-require',
      'n/handle-callback-err',
      'n/no-mixed-requires',
      'n/no-new-require',
      'n/no-path-concat',
      'n/no-process-exit'
    ]);
    assert.deepEqual(results.warnings, ['n/no-process-env', 'n/no-sync']);
  });
});
