const assert = require('assert'),
      path = require('path'),
      config = require('../lib/node'),
      {findRules, runLint, validate} = require('./lib');

const configFile = path.resolve(__dirname, '../lib/node.js');

describe('node', () => {

  it('should be valid.', () => {
    validate(config);
  });

  it('should not use deprecated rules.', () => {
    const rules = findRules('deprecated', configFile, {filterPrefix: /^node\//});

    assert(Array.isArray(rules));
    assert.deepStrictEqual(rules, []);
  });

  it('should not be unused rules.', () => {
    const rules = findRules('unused', configFile, {filterPrefix: /^node\//});

    assert(Array.isArray(rules));
    assert.deepStrictEqual(rules, []);
  });

  it('should has no errors and no warnings in node.valid.js', async () => {
    const file = path.resolve(__dirname, './fixture/node.valid.js'),
          results = await runLint(file, configFile);

    assert.deepStrictEqual(results.errors, []);
    assert.deepStrictEqual(results.warnings, []);
  });

  it('should has some errors and warnings in node.invalid.js', async () => {
    const file = path.resolve(__dirname, './fixture/node.invalid.js'),
          results = await runLint(file, configFile);

    assert.deepStrictEqual(results.errors, [
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
    assert.deepStrictEqual(results.warnings, [
      'node/no-process-env',
      'node/no-sync'
    ]);
  });

});
