/**
 * settings
 *
 * @param {Boolean} bool boolean argument
 * @param {String} str string argument
 * @param {Number} num number argument
 * @return {Object}
 */
function settings(bool, str, num) {
  return {};
}

/**
 * jsdoc/check-examples
 *
 * @return {Boolean}
 * @example
 * checkExamples();
 */
function checkExamples() {
  return true;
}

/**
 * jsdoc/check-examples rejectExampleCodeRegex
 *
 * @return {Boolean}
 * @example ```hbs
 * {{hoge}}
 * ```
 * @example ```
 * {{hoge}}
 * ```
 */
function checkExampleNoJS() {
  return true;
}

/**
 * jsdoc/check-syntax
 *
 * @param {String} arg1 argument 1
 * @return {Boolean}
 */
function checkSyntax(arg1) {
  return true;
}

/**
 * jsdoc/require-description
 */
function requireDescription() {
  // has no settings
}
