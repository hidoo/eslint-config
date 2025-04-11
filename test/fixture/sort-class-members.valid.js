module.exports = class Hoge {
  static staticProp = true;

  static staticMethod() {
    return true;
  }

  instanceProp = true;

  _instancePrivateProps = true;

  constructor(value) {
    this.instanceProp = value;
  }

  instanceMethod() {
    return this.instanceProp;
  }

  get instanceValue() {
    return this.instanceProp;
  }

  set instanceValue(value) {
    this.instanceProp = value;
  }

  _instancePrivateMethod() {
    // eslint-disable-next-line no-underscore-dangle
    return this._instancePrivateProps;
  }
};
