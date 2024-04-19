import assert from 'node:assert';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { calculateConfig, findRules, runLint } from './lib/index.js';

const DEBUG = Boolean(process.env.DEBUG);

describe('lib/sort-class-members', () => {
  let dirname = null;
  let configFile = null;

  before(() => {
    dirname = path.dirname(fileURLToPath(import.meta.url));
    configFile = path.resolve(dirname, '../lib/sort-class-members.js');
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
      filterPrefix: /^sort-class-members\//
    });

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should not be unused rules.', async () => {
    const rules = await findRules('unused', configFile, {
      filterPrefix: /^sort-class-members\//
    });

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should has no errors and no warnings in sort-class-members.valid.js', async () => {
    const file = path.resolve(dirname, './fixture/sort-class-members.valid.js');
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

    assert.deepEqual(results.errors, []);
    assert.deepEqual(results.warnings, []);
  });
});
