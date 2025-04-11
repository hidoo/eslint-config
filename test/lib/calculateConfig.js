import { ESLint } from 'eslint';

/**
 * load config from config file path
 *
 * @param {Array<import('eslint').Linter.Config>} configs array of config
 * @param {import('eslint').ESLint.Options} options eslint options
 * @return {Promise<Object>}
 */
export async function calculateConfig(configs = [], options = {}) {
  const eslint = new ESLint({
    overrideConfigFile: true,
    baseConfig: [...configs],
    ...options
  });

  // console.log(configs);

  return await eslint.calculateConfigForFile('_.js');
}
