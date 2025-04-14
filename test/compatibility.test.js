import assert from 'node:assert';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { calculateConfig, findRules, runLint } from './lib/index.js';

const DEBUG = Boolean(process.env.DEBUG);

describe('lib/compatibility', () => {
  let dirname = null;
  let configFile = null;

  before(() => {
    dirname = path.dirname(fileURLToPath(import.meta.url));
    configFile = path.resolve(dirname, '../lib/compatibility.js');
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
      filterPrefix: /^compat\//
    });

    if (DEBUG) {
      console.log(rules);
    }

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should not be unused rules.', async () => {
    const rules = await findRules('unused', configFile, {
      filterPrefix: /^compat\//
    });

    if (DEBUG) {
      console.log(rules);
    }

    assert(Array.isArray(rules));
    assert.deepEqual(rules, []);
  });

  it('should has some errors and warnings in compatibility.invalid.js', async () => {
    const file = path.resolve(dirname, './fixture/compatibility.invalid.js');
    const results = await runLint(file, configFile, {
      cwd: dirname
    });

    if (DEBUG) {
      console.log(results);
    }

    assert.deepEqual(results.errors, [], 'No errors.');
    assert.deepEqual(results.warnings, ['compat/compat'], 'Some errors.');
  });
});
