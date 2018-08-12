'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Display4 = exports.Display3 = exports.Display2 = exports.Display1 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilities = require('../utilities');

var _dom = require('./dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Display = function (_Component) {
  _inherits(Display, _Component);

  function Display() {
    _classCallCheck(this, Display);

    return _possibleConstructorReturn(this, (Display.__proto__ || Object.getPrototypeOf(Display)).apply(this, arguments));
  }

  _createClass(Display, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _dom.BH1,
        this.props,
        this.props.children
      );
    }
  }]);

  return Display;
}(_react.Component);

var Display1 = (0, _utilities.withClassName)('display-1')(Display);
var Display2 = (0, _utilities.withClassName)('display-2')(Display);
var Display3 = (0, _utilities.withClassName)('display-3')(Display);
var Display4 = (0, _utilities.withClassName)('display-4')(Display);

exports.Display1 = Display1;
exports.Display2 = Display2;
exports.Display3 = Display3;
exports.Display4 = Display4;