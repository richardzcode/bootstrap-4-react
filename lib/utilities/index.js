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

var _display = require('./display');

Object.defineProperty(exports, 'withDisplay', {
  enumerable: true,
  get: function get() {
    return _display.withDisplay;
  }
});

var _spacing = require('./spacing');

Object.defineProperty(exports, 'withSpacing', {
  enumerable: true,
  get: function get() {
    return _spacing.withSpacing;
  }
});

var _sizing = require('./sizing');

Object.defineProperty(exports, 'withSizing', {
  enumerable: true,
  get: function get() {
    return _sizing.withSizing;
  }
});

var _border = require('./border');

Object.defineProperty(exports, 'withBorder', {
  enumerable: true,
  get: function get() {
    return _border.withBorder;
  }
});

var _active = require('./active');

Object.defineProperty(exports, 'withActive', {
  enumerable: true,
  get: function get() {
    return _active.withActive;
  }
});

var _screenreaders = require('./screenreaders');

Object.defineProperty(exports, 'withScreenreaders', {
  enumerable: true,
  get: function get() {
    return _screenreaders.withScreenreaders;
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