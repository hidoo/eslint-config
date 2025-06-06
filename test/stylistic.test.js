import assert from 'node:assert';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { calculateConfig, findRules, runLint } from './lib/index.js';

const DEBUG = Boolean(process.env.DEBUG);

describe('lib/stylistic', () => {
  let dirname = null;
  let configFile = null;

  before(() => {
    dirname = path.dirname(fileURLToPath(import.meta.url));
    configFile = path.resolve(dirname, '../lib/stylistic.js');
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
      filterPrefix: /^@stylistic\//
    });

    if (DEBUG) {
      console.log(rules);
    }

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should not be unused rules.', async () => {
    const rules = await findRules('unused', configFile, {
      filterPrefix: /^@stylistic\//
    });

    if (DEBUG) {
      console.log(rules);
    }

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should has no errors and no warnings in stylistic.valid.js', async () => {
    const file = path.resolve(dirname, './fixture/stylistic.valid.js');
    const results = await runLint(file, configFile, {
      overrideConfig: {
        languageOptions: {
          parserOptions: {
            ecmaVersion: 'latest',
            ecmaFeatures: {
              jsx: true
            }
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

  it('should has some errors and warnings in stylistic.invalid.js', async () => {
    const file = path.resolve(dirname, './fixture/stylistic.invalid.js');
    const results = await runLint(file, configFile, {
      overrideConfig: {
        languageOptions: {
          parserOptions: {
            ecmaVersion: 'latest',
            ecmaFeatures: {
              jsx: true
            }
          }
        }
      }
    });

    if (DEBUG) {
      console.log(results);
    }

    assert.deepEqual(results.errors, [
      '@stylistic/function-paren-newline',
      '@stylistic/lines-between-class-members',
      '@stylistic/newline-per-chained-call',
      '@stylistic/object-curly-newline',
      '@stylistic/jsx-function-call-newline',
      '@stylistic/line-comment-position'
    ]);
    assert.deepEqual(results.warnings, []);
  });
});
