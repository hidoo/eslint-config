import assert from 'node:assert';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { calculateConfig, findRules, runLint } from './lib/index.js';

const DEBUG = Boolean(process.env.DEBUG);

describe('lib/base', () => {
  let dirname = null;
  let configFile = null;

  before(() => {
    dirname = path.dirname(fileURLToPath(import.meta.url));
    configFile = path.resolve(dirname, '../lib/base.js');
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
    const rules = await findRules('deprecated', configFile);

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should not be unused rules.', async () => {
    const rules = await findRules('unused', configFile);

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should has no errors and no warnings in base.valid.js', async () => {
    const file = path.resolve(dirname, './fixture/base.valid.js');
    const results = await runLint(file, configFile);

    if (DEBUG) {
      console.log(results);
    }

    assert.deepEqual(results.errors, []);
    assert.deepEqual(results.warnings, []);
  });

  it('should has some errors and warnings in base.invalid.js', async () => {
    const file = path.resolve(dirname, './fixture/base.invalid.js');
    const results = await runLint(file, configFile);

    if (DEBUG) {
      console.log(results);
    }

    assert.deepEqual(results.errors, [
      'func-names',
      'line-comment-position',
      'grouped-accessor-pairs',
      'no-constructor-return',
      'no-dupe-else-if',
      'no-setter-return',
      'prefer-exponentiation-operator',
      'default-case-last',
      'no-useless-backreference'
    ]);
    assert.deepEqual(results.warnings, []);
    assert.deepEqual(results.unusedDisableDirectives, [
      "Unused eslint-disable directive (no problems were reported from 'no-magic-numbers')."
    ]);
  });
});
