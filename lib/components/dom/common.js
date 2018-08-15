'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.domStack = domStack;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilities = require('../../utilities');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function domStack(Comp) {
  return (0, _utilities.stack)(Comp, [(0, _utilities.withColor)(), (0, _utilities.withDisplay)(), (0, _utilities.withAlign)(), (0, _utilities.withSpacing)(), (0, _utilities.withSizing)(), (0, _utilities.withBorder)(), (0, _utilities.withActive)(), (0, _utilities.withScreenreaders)(), (0, _utilities.withPopover)(), (0, _utilities.withTooltip)(), (0, _utilities.withFlex)()]);
}