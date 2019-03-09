'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withEmbed = exports.withPosition = exports.withFont = exports.withShadow = exports.withFloat = exports.withFlex = exports.withPopover = exports.withTooltip = exports.withScreenreaders = exports.withDrop = exports.withActive = exports.withBorder = exports.withSizing = exports.withSpacing = exports.withAlign = exports.withDisplay = exports.withColor = exports.withPurpose = exports.mergeClassName = exports.flatClassName = exports.withClassName = exports.domStack = undefined;
exports.stack = stack;

var _className = require('./className');

var _purpose = require('./purpose');

var _color = require('./color');

var _display = require('./display');

var _align = require('./align');

var _spacing = require('./spacing');

var _sizing = require('./sizing');

var _border = require('./border');

var _active = require('./active');

var _drop = require('./drop');

var _screenreaders = require('./screenreaders');

var _tooltip = require('./tooltip');

var _popover = require('./popover');

var _flex = require('./flex');

var _float = require('./float');

var _shadow = require('./shadow');

var _font = require('./font');

var _position = require('./position');

var _embed = require('./embed');

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

var domStack = [(0, _color.withColor)(), (0, _display.withDisplay)(), (0, _align.withAlign)(), (0, _spacing.withSpacing)(), (0, _sizing.withSizing)(), (0, _border.withBorder)(), (0, _active.withActive)(), (0, _screenreaders.withScreenreaders)(), (0, _popover.withPopover)(), (0, _tooltip.withTooltip)(), (0, _flex.withFlex)(), (0, _float.withFloat)(), (0, _shadow.withShadow)(), (0, _font.withFont)(), (0, _position.withPosition)(), (0, _embed.withEmbed)()];

exports.domStack = domStack;
exports.withClassName = _className.withClassName;
exports.flatClassName = _className.flatClassName;
exports.mergeClassName = _className.mergeClassName;
exports.withPurpose = _purpose.withPurpose;
exports.withColor = _color.withColor;
exports.withDisplay = _display.withDisplay;
exports.withAlign = _align.withAlign;
exports.withSpacing = _spacing.withSpacing;
exports.withSizing = _sizing.withSizing;
exports.withBorder = _border.withBorder;
exports.withActive = _active.withActive;
exports.withDrop = _drop.withDrop;
exports.withScreenreaders = _screenreaders.withScreenreaders;
exports.withTooltip = _tooltip.withTooltip;
exports.withPopover = _popover.withPopover;
exports.withFlex = _flex.withFlex;
exports.withFloat = _float.withFloat;
exports.withShadow = _shadow.withShadow;
exports.withFont = _font.withFont;
exports.withPosition = _position.withPosition;
exports.withEmbed = _embed.withEmbed;