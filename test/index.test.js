import assert from 'node:assert';
import { createRequire } from 'node:module';
import { calculateConfig } from './lib/index.js';

const require = createRequire(import.meta.url);

describe('@hidoo/eslint-config', () => {
  let baseConfig = null;
  let calculatedBaseConfig = null;

  before(async () => {
    baseConfig = (await import('../index.js')).default;
    calculatedBaseConfig = await calculateConfig([...baseConfig]);
  });

  it('should be importable.', () => {
    assert(require.resolve('@hidoo/eslint-config'));
  });

  describe('+babel', () => {
    it('should be importable.', () => {
      assert(require.resolve('@hidoo/eslint-config/+babel'));
    });

    it('should use @babel/eslint-parser.', async () => {
      const calculated = await calculateConfig(
        [...baseConfig, (await import('../+babel.js')).default],
        {
          ignore: false
        }
      );

      ['settings', 'plugins', 'rules'].forEach((key) => {
        assert.deepEqual(calculated[key], calculatedBaseConfig[key]);
      });

      assert.deepEqual(
        calculated.languageOptions.parser,
        (await import('@babel/eslint-parser')).default
      );
      assert.deepEqual(
        calculated.languageOptions.globals,
        calculatedBaseConfig.languageOptions.globals
      );
      assert.deepEqual(calculated.languageOptions.parserOptions, {
        ...calculatedBaseConfig.languageOptions.parserOptions,
        requireConfigFile: false
      });
    });
  });

  describe('+compatibility', () => {
    it('should be importable.', () => {
      assert(require.resolve('@hidoo/eslint-config/+compatibility'));
    });

    it('should use settings for compatibility check.', async () => {
      const calculated = await calculateConfig(
        [...baseConfig, (await import('../+compatibility.js')).default],
        { ignore: false }
      );

      ['globals', 'parserOptions'].forEach((key) => {
        assert.deepEqual(
          calculated.languageOptions[key],
          calculatedBaseConfig.languageOptions[key]
        );
      });
      assert.deepEqual(calculated.settings, calculatedBaseConfig.settings);
      assert.deepEqual(calculated.plugins, {
        ...calculatedBaseConfig.plugins,
        compat: (await import('eslint-plugin-compat')).default
      });
    });
  });

  describe('+mocha', () => {
    it('should be importable.', () => {
      assert(require.resolve('@hidoo/eslint-config/+mocha'));
    });

    it('should use settings for mocha.', async () => {
      const calculated = await calculateConfig(
        [...baseConfig, (await import('../+mocha.js')).default],
        { ignore: false }
      );

      assert.deepEqual(
        calculated.languageOptions.parserOptions,
        calculatedBaseConfig.languageOptions.parserOptions
      );
      assert(Object.keys(calculated.languageOptions.globals).includes('mocha'));
      assert.deepEqual(calculated.settings, calculatedBaseConfig.settings);
      assert.deepEqual(calculated.plugins, {
        ...calculatedBaseConfig.plugins,
        mocha: (await import('eslint-plugin-mocha')).default
      });
    });
  });

  describe('+node', () => {
    it('should be importable.', () => {
      assert(require.resolve('@hidoo/eslint-config/+node'));
    });

    it('should use settings for Node.js.', async () => {
      const calculated = await calculateConfig(
        [...baseConfig, (await import('../+node.js')).default],
        { ignore: false }
      );

      assert.deepEqual(calculated.languageOptions.parserOptions, {
        ...calculatedBaseConfig.languageOptions.parserOptions,
        ecmaFeatures: {
          ...calculatedBaseConfig.languageOptions.parserOptions.ecmaFeatures,
          impliedStrict: true
        }
      });
      assert(
        Object.keys(calculated.languageOptions.globals).includes('setImmediate')
      );
      assert.deepEqual(calculated.settings, calculatedBaseConfig.settings);
      assert.deepEqual(calculated.plugins, {
        ...calculatedBaseConfig.plugins,
        // eslint-disable-next-line id-length
        n: (await import('eslint-plugin-n')).default
      });
    });
  });

  describe('+prettier', () => {
    it('should be importable.', () => {
      assert(require.resolve('@hidoo/eslint-config/+prettier'));
    });
  });

  describe('+stylistic', () => {
    it('should be importable.', () => {
      assert(require.resolve('@hidoo/eslint-config/+stylistic'));
    });
  });
});
