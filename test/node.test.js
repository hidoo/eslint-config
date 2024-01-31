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
      'node/no-callback-literal',
      'node/exports-style',
      // 'node/file-extension-in-import',
      'node/prefer-global/buffer',
      'node/prefer-global/console',
      'node/prefer-global/process',
      'node/prefer-global/text-decoder',
      'node/prefer-global/text-encoder',
      'node/prefer-global/url-search-params',
      'node/prefer-global/url',
      'node/callback-return',
      'node/global-require',
      'node/handle-callback-err',
      'node/no-mixed-requires',
      'node/no-new-require',
      'node/no-path-concat',
      'node/no-process-exit'
    ]);
    assert.deepEqual(results.warnings, ['node/no-process-env', 'node/no-sync']);
  });
});
