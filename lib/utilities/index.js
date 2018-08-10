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

var _color = require('./color');

Object.defineProperty(exports, 'withColor', {
  enumerable: true,
  get: function get() {
    return _color.withColor;
  }
});

var _spacing = require('./spacing');

Object.defineProperty(exports, 'withSpacing', {
  enumerable: true,
  get: function get() {
    return _spacing.withSpacing;
  }
});

var _border = require('./border');

Object.defineProperty(exports, 'withBorder', {
  enumerable: true,
  get: function get() {
    return _border.withBorder;
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