'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BVar = exports.BKbd = exports.BSamp = exports.BCode = exports.BStrong = exports.BEm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilities = require('../../utilities');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Em = function (_Component) {
  _inherits(Em, _Component);

  function Em() {
    _classCallCheck(this, Em);

    return _possibleConstructorReturn(this, (Em.__proto__ || Object.getPrototypeOf(Em)).apply(this, arguments));
  }

  _createClass(Em, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'em',
        this.props,
        this.props.children
      );
    }
  }]);

  return Em;
}(_react.Component);

var Strong = function (_Component2) {
  _inherits(Strong, _Component2);

  function Strong() {
    _classCallCheck(this, Strong);

    return _possibleConstructorReturn(this, (Strong.__proto__ || Object.getPrototypeOf(Strong)).apply(this, arguments));
  }

  _createClass(Strong, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'strong',
        this.props,
        this.props.children
      );
    }
  }]);

  return Strong;
}(_react.Component);

var Code = function (_Component3) {
  _inherits(Code, _Component3);

  function Code() {
    _classCallCheck(this, Code);

    return _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).apply(this, arguments));
  }

  _createClass(Code, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'code',
        this.props,
        this.props.children
      );
    }
  }]);

  return Code;
}(_react.Component);

var Samp = function (_Component4) {
  _inherits(Samp, _Component4);

  function Samp() {
    _classCallCheck(this, Samp);

    return _possibleConstructorReturn(this, (Samp.__proto__ || Object.getPrototypeOf(Samp)).apply(this, arguments));
  }

  _createClass(Samp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'samp',
        this.props,
        this.props.children
      );
    }
  }]);

  return Samp;
}(_react.Component);

var Kbd = function (_Component5) {
  _inherits(Kbd, _Component5);

  function Kbd() {
    _classCallCheck(this, Kbd);

    return _possibleConstructorReturn(this, (Kbd.__proto__ || Object.getPrototypeOf(Kbd)).apply(this, arguments));
  }

  _createClass(Kbd, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'kbd',
        this.props,
        this.props.children
      );
    }
  }]);

  return Kbd;
}(_react.Component);

var Var = function (_Component6) {
  _inherits(Var, _Component6);

  function Var() {
    _classCallCheck(this, Var);

    return _possibleConstructorReturn(this, (Var.__proto__ || Object.getPrototypeOf(Var)).apply(this, arguments));
  }

  _createClass(Var, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'var',
        this.props,
        this.props.children
      );
    }
  }]);

  return Var;
}(_react.Component);

var BEm = (0, _utilities.stack)(Em, _utilities.domStack);
var BStrong = (0, _utilities.stack)(Strong, _utilities.domStack);
var BCode = (0, _utilities.stack)(Code, _utilities.domStack);
var BSamp = (0, _utilities.stack)(Samp, _utilities.domStack);
var BKbd = (0, _utilities.stack)(Kbd, _utilities.domStack);
var BVar = (0, _utilities.stack)(Var, _utilities.domStack);

exports.BEm = BEm;
exports.BStrong = BStrong;
exports.BCode = BCode;
exports.BSamp = BSamp;
exports.BKbd = BKbd;
exports.BVar = BVar;