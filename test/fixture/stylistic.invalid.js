// function-paren-newline
function functionParenNewlineA(arg1,
  arg2,
  arg3
) {
  return true;
}

function functionParenNewlineB(arg1, arg2,
  arg3
) {
  return true;
}

// lines-between-class-members
class LinesBetweenClassMembers {
  memberA() {
    return this;
  }
  memberB() {
    return this;
  }
  memberC() { return this; }
}

// newline-per-chained-call
(() => {
  newlinePerChainedCall.mathodA().methodB().methodC();
})();

// object-curly-newline
(() => {
  const objectCurlyNewlineA = {propA: {},
          propB: {},
          propC: {}
        },
        objectCurlyNewlineB = {
          propA: {},
          propB: {},
          propC: {}};
})();

/**
 * example of @stylistic/jsx-function-call-newline
 *
 * @param {Function} render render function
 * @return {*}
 */
function jsxFunctionCallNewLine(render) {
  render(<div></div>);
}

/**
 * example of @stylistic/line-comment-position
 *
 * @return {Boolean}
 */
function lineCommentPosition() {
  return true; // invalid comment
}

