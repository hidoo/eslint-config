// func-names
(() => true)();

// function-paren-newline
/* eslint-disable no-unused-vars */
function functionParenNewlineA(arg1, arg2, arg3) {
  return true;
}

function functionParenNewlineB(
  arg1,
  arg2,
  arg3
) {
  return true;
}
/* eslint-enable no-unused-vars */

// line-comment-position
// valid comment
(() => true)(); // eslint-***
// valid comment

// lines-between-class-members
/* eslint-disable no-unused-vars */
class LinesBetweenClassMembers {
  memberA() {
    return this;
  }

  memberB() {
    return this;
  }

  memberC() { return this; }
}
/* eslint-enable no-unused-vars */

// newline-per-chained-call
/* eslint-disable no-undef */
(() => {
  newlinePerChainedCall.mathodA().methodB()
    .methodC();

  newlinePerChainedCall.mathodA()
    .methodB()
    .methodC();

  newlinePerChainedCall
    .mathodA()
    .methodB()
    .methodC();
})();
/* eslint-enable no-undef */

// object-curly-newline
/* eslint-disable no-unused-vars */
(() => {
  const objectCurlyNewlineA = {propA: {}, propB: {}, propC: {}},
        objectCurlyNewlineB = {
          propA: {},
          propB: {},
          propC: {}
        };
})();
/* eslint-enable no-unused-vars */
