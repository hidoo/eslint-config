const assert = require('assert');
const path = require('path');
const {ESLint} = require('eslint');
const {validateConfig} = require('./lib');

const configFile = path.resolve(__dirname, '../index.js');

describe('@hidoo/eslint-config', () => {
  let baseConfig = null;

  before(async () => {
    const eslint = new ESLint({
      baseConfig: {
        'extends': [
          configFile
        ]
      },
      useEslintrc: false,
      ignore: false
    });

    baseConfig = await eslint.calculateConfigForFile('_.js');
  });

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

  it('should use @babel/eslint-parser with "@hidoo/eslint-config/+babel".', async () => {
    const eslint = new ESLint({
      baseConfig: {
        'extends': [
          configFile,
          path.resolve(__dirname, '../+babel.js')
        ]
      },
      useEslintrc: false,
      ignore: false
    });

    const config = await eslint.calculateConfigForFile('_.js');

    assert(config.parser.indexOf('@babel/eslint-parser') !== -1);
    assert.deepEqual(config.env, baseConfig.env);
    assert.deepEqual(config.settings, baseConfig.settings);
    assert.deepEqual(config.plugins, baseConfig.plugins);
    assert.deepEqual(
      config.parserOptions,
      {
        ...baseConfig.parserOptions,
        requireConfigFile: false
      }
    );
    assert.deepEqual(config.rules, baseConfig.rules);
  });

  it('should use settings for mocha with "@hidoo/eslint-config/+mocha".', async () => {
    const eslint = new ESLint({
      baseConfig: {
        'extends': [
          configFile,
          path.resolve(__dirname, '../+mocha.js')
        ]
      },
      useEslintrc: false,
      ignore: false
    });

    const config = await eslint.calculateConfigForFile('_.js');

    assert.deepEqual(config.env, {...baseConfig.env, mocha: true});
    assert.deepEqual(config.settings, baseConfig.settings);
    assert.deepEqual(config.plugins, [...baseConfig.plugins, 'mocha']);
    assert.deepEqual(config.parserOptions, baseConfig.parserOptions);
  });

  it('should use settings for Node.js with "@hidoo/eslint-config/+node".', async () => {
    const eslint = new ESLint({
      baseConfig: {
        'extends': [
          configFile,
          path.resolve(__dirname, '../+node.js')
        ]
      },
      useEslintrc: false,
      ignore: false
    });

    const config = await eslint.calculateConfigForFile('_.js');

    assert.deepEqual(config.env, {...baseConfig.env, node: true});
    assert.deepEqual(config.settings, baseConfig.settings);
    assert.deepEqual(config.plugins, [...baseConfig.plugins, 'node']);
    assert.deepEqual(
      config.parserOptions,
      {
        ...baseConfig.parserOptions,
        ecmaFeatures: {
          ...baseConfig.parserOptions.ecmaFeatures,
          globalReturn: true,
          impliedStrict: true
        }
      }
    );
  });
});
