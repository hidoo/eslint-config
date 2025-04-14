import assert from 'node:assert';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { calculateConfig, findRules, runLint } from './lib/index.js';

const DEBUG = Boolean(process.env.DEBUG);

describe('lib/import', () => {
  let dirname = null;
  let configFile = null;

  before(() => {
    dirname = path.dirname(fileURLToPath(import.meta.url));
    configFile = path.resolve(dirname, '../lib/import.js');
  });

  it('should be valid.', async () => {
    let err = null;

    try {
      const config = await calculateConfig([
        (await import(configFile)).default
      ]);

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

    if (DEBUG) {
      console.log(rules);
    }

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should not be unused rules.', async () => {
    const rules = await findRules('unused', configFile, {
      filterPrefix: /^import\//
    });

    if (DEBUG) {
      console.log(rules);
    }

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should has some errors and warnings in import.invalid.js', async () => {
    const file = path.resolve(dirname, './fixture/import.invalid.js');
    const results = await runLint(file, configFile, {
      overrideConfig: {
        languageOptions: {
          parserOptions: {
            ecmaVersion: 'latest'
          }
        }
      }
    });

    if (DEBUG) {
      console.log(results);
    }

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
