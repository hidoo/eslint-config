const assert = require('assert'),
      path = require('path'),
      {CLIEngine} = require('eslint'),
      config = require('../index.js'),
      {validate} = require('./lib');

describe('@hidoo/eslint-config', () => {
  let baseConfig = null;

  beforeEach(() => {
    const cli = new CLIEngine({
      baseConfig: {
        'extends': [
          path.resolve(__dirname, '../index.js')
        ]
      },
      useEslintrc: false,
      ignore: false
    });

    baseConfig = cli.getConfigForFile(path.resolve(__dirname, '../index.js'));
  });

  it('should be valid.', () => {
    validate(config);
  });

  it('should use babel-eslint to parser if extends with "@hidoo/eslint-config/+babel".', () => {
    const cli = new CLIEngine({
      baseConfig: {
        'extends': [
          path.resolve(__dirname, '../index.js'),
          path.resolve(__dirname, '../+babel.js')
        ]
      },
      useEslintrc: false,
      ignore: false
    });

    const cfg = cli.getConfigForFile(path.resolve(__dirname, '../index.js'));

    assert(cfg.parser.indexOf('babel-eslint') !== -1);
    assert.deepStrictEqual(cfg.env, baseConfig.env);
    assert.deepStrictEqual(cfg.settings, baseConfig.settings);
    assert.deepStrictEqual(cfg.plugins, baseConfig.plugins);
    assert.deepStrictEqual(cfg.parserOptions, baseConfig.parserOptions);
    assert.deepStrictEqual(cfg.rules, baseConfig.rules);
  });

  it('should use settings for mocha if extends with "@hidoo/eslint-config/+mocha".', () => {
    const cli = new CLIEngine({
      baseConfig: {
        'extends': [
          path.resolve(__dirname, '../index.js'),
          path.resolve(__dirname, '../+mocha.js')
        ]
      },
      useEslintrc: false,
      ignore: false
    });

    const cfg = cli.getConfigForFile(path.resolve(__dirname, '../index.js'));

    assert.deepStrictEqual(cfg.env, Object.assign(baseConfig.env, {mocha: true, node: true}));
    assert.deepStrictEqual(cfg.settings, baseConfig.settings);
    assert.deepStrictEqual(cfg.plugins, [...baseConfig.plugins, 'mocha']);
    assert.deepStrictEqual(cfg.parserOptions, baseConfig.parserOptions);
  });

  it('should use settings for Node.js if extends with "@hidoo/eslint-config/+node".', () => {
    const cli = new CLIEngine({
      baseConfig: {
        'extends': [
          path.resolve(__dirname, '../index.js'),
          path.resolve(__dirname, '../+node.js')
        ]
      },
      useEslintrc: false,
      ignore: false
    });

    const cfg = cli.getConfigForFile(path.resolve(__dirname, '../index.js'));

    assert.deepStrictEqual(cfg.env, Object.assign(baseConfig.env, {node: true}));
    assert.deepStrictEqual(cfg.settings, baseConfig.settings);
    assert.deepStrictEqual(cfg.plugins, [...baseConfig.plugins, 'node']);
    assert.deepStrictEqual(cfg.parserOptions, Object.assign(baseConfig.parserOptions, {
      ecmaFeatures: Object.assign(baseConfig.parserOptions.ecmaFeatures, {
        globalReturn: true,
        impliedStrict: true
      })
    }));
  });
});
