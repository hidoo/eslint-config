import assert from 'node:assert';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { calculateConfig, findRules, runLint } from './lib/index.js';

const DEBUG = Boolean(process.env.DEBUG);

describe('lib/jsdoc', () => {
  let dirname = null;
  let configFile = null;

  before(() => {
    dirname = path.dirname(fileURLToPath(import.meta.url));
    configFile = path.resolve(dirname, '../lib/jsdoc.js');
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
      filterPrefix: /^jsdoc\//
    });

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should not be unused rules.', async () => {
    const rules = await findRules('unused', configFile, {
      filterPrefix: /^jsdoc\//
    });

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should has no errors and no warnings in jsdoc.valid.js', async () => {
    const file = path.resolve(dirname, './fixture/jsdoc.valid.js');
    const results = await runLint(file, configFile);

    if (DEBUG) {
      console.log(results);
    }

    assert.deepEqual(results.errors, []);
    assert.deepEqual(results.warnings, []);
  });

  it('should has some errors and warnings in jsdoc.invalid.js', async () => {
    const file = path.resolve(dirname, './fixture/jsdoc.invalid.js');
    const results = await runLint(file, configFile);

    if (DEBUG) {
      console.log(results);
    }

    assert.deepEqual(results.errors, [
      //  Note: This rule currently does not work in ESLint 8
      // 'jsdoc/check-examples',
      'jsdoc/check-syntax',
      'jsdoc/require-description'
    ]);
    assert.deepEqual(results.warnings, [
      'jsdoc/require-returns',
      'jsdoc/check-types',
      'jsdoc/check-tag-names'
    ]);
  });
});
