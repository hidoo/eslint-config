const {ESLint} = require('eslint');

/**
 * validate config file
 *
 * @param {String} configFile config file
 * @return {Promise<Object>}
 */
module.exports = async function validateConfig(configFile) {
  const eslint = new ESLint({useEslintrc: true});
  const config = await eslint.calculateConfigForFile(configFile);

  return config;
};
