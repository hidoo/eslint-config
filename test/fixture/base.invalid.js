/* eslint max-classes-per-file: 0 */

// func-names
(function() { return true; })();

// function-paren-newline
/* eslint-disable no-unused-vars */
function functionParenNewlineA(arg1,
  arg2,
  arg3
) {
  return true ;
}

function functionParenNewlineB(arg1, arg2,
  arg3
) {
  return true;
}
/* eslint-enable no-unused-vars */

// line-comment-position
/* eslint-disable no-inline-comments */
(() => true)(); // invalid comment
/* eslint-enable no-inline-comments */

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
  newlinePerChainedCall.mathodA().methodB().methodC();
})();
/* eslint-enable no-undef */

// object-curly-newline
/* eslint-disable no-unused-vars */
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
/* eslint-enable no-unused-vars */

// grouped-accessor-pairs
/* eslint-disable no-unused-vars */
class GroupedAccessorPairs {
  get aaa() {
    return this.aaa;
  }

  get hoge() {
    return this.hoge;
  }

  set aaa(value) {
    this.aaa = value;
  }
}
/* eslint-enable no-unused-vars */

// no-constructor-return
/* eslint-disable no-unused-vars */
class NoConstructorReturn {
  constructor(value) {
    this.value = value;
    return true;
  }
}
/* eslint-enable no-unused-vars */

// no-dupe-else-if
(() => {
  const aa = true;

  if (aa) {
    return true;
  }
  else if (aa) {
    return true;
  }
  return false;
})();

// no-setter-return
/* eslint-disable no-unused-vars */
class NoSetterReturn {
  get aa() {
    return this.value;
  }

  set aa(value) {
    this.value = value;
    return value;
  }
}
/* eslint-enable no-unused-vars */

// prefer-exponentiation-operator
/* eslint-disable no-unused-vars, no-magic-numbers */
(() => {
  const result = Math.pow(2, 2);
})();
/* eslint-enable no-unused-vars, no-magic-numbers */

// default-case-last
(() => {
  const defaultCaseLast = 'valid';

  switch (defaultCaseLast) {
    default:
      break;
    case 'invalid':
      break;
  }
})();

// no-useless-backreference
/* eslint-disable no-unused-vars, prefer-named-capture-group */
const noUselessBackreference = /(\1)/;
/* eslint-enable no-unused-vars, prefer-named-capture-group */
