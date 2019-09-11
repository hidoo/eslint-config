const assert = require('assert'),
      path = require('path'),
      config = require('../lib/import'),
      {findRules, runLint, validate} = require('./lib');

const configFile = path.resolve(__dirname, '../lib/import.js');

describe('import', () => {

  it('should be valid.', () => {
    validate(config);
  });

  it('should not use deprecated rules.', () => {
    const rules = findRules('deprecated', configFile, {filterPrefix: /^import\//});

    assert(Array.isArray(rules));
    assert.deepStrictEqual(rules, []);
  });

  it('should not be unused rules.', () => {
    const rules = findRules('unused', configFile, {filterPrefix: /^import\//});

    assert(Array.isArray(rules));
    assert.deepStrictEqual(rules, []);
  });

  it('should has some errors and warnings in import.invalid.js', async () => {
    const file = path.resolve(__dirname, './fixture/import.invalid.js'),
          results = await runLint(file, configFile, {parserOptions: {ecmaVersion: 2019}});

    assert.deepStrictEqual(results.errors, [
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
    assert.deepStrictEqual(results.warnings, [
      'import/no-dynamic-require'
    ]);
  });

});
