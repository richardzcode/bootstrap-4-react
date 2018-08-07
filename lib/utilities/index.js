'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _className = require('./className');

Object.defineProperty(exports, 'withClassName', {
  enumerable: true,
  get: function get() {
    return _className.withClassName;
  }
});
Object.defineProperty(exports, 'mergeClassName', {
  enumerable: true,
  get: function get() {
    return _className.mergeClassName;
  }
});

var _purpose = require('./purpose');

Object.defineProperty(exports, 'withPurpose', {
  enumerable: true,
  get: function get() {
    return _purpose.withPurpose;
  }
});
exports.stack = stack;
function stack(Comp, funcs) {
  if (!funcs) {
    return Comp;
  }

  var C = Comp;
  for (var i = 0; i < funcs.length; i++) {
    C = funcs[i](C);
  }

  return C;
}