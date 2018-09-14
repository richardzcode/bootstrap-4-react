'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BH6 = exports.BH5 = exports.BH4 = exports.BH3 = exports.BH2 = exports.BH1 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilities = require('../../utilities');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var H1 = function (_Component) {
  _inherits(H1, _Component);

  function H1() {
    _classCallCheck(this, H1);

    return _possibleConstructorReturn(this, (H1.__proto__ || Object.getPrototypeOf(H1)).apply(this, arguments));
  }

  _createClass(H1, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h1',
        this.props,
        this.props.children
      );
    }
  }]);

  return H1;
}(_react.Component);

var H2 = function (_Component2) {
  _inherits(H2, _Component2);

  function H2() {
    _classCallCheck(this, H2);

    return _possibleConstructorReturn(this, (H2.__proto__ || Object.getPrototypeOf(H2)).apply(this, arguments));
  }

  _createClass(H2, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h2',
        this.props,
        this.props.children
      );
    }
  }]);

  return H2;
}(_react.Component);

var H3 = function (_Component3) {
  _inherits(H3, _Component3);

  function H3() {
    _classCallCheck(this, H3);

    return _possibleConstructorReturn(this, (H3.__proto__ || Object.getPrototypeOf(H3)).apply(this, arguments));
  }

  _createClass(H3, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h3',
        this.props,
        this.props.children
      );
    }
  }]);

  return H3;
}(_react.Component);

var H4 = function (_Component4) {
  _inherits(H4, _Component4);

  function H4() {
    _classCallCheck(this, H4);

    return _possibleConstructorReturn(this, (H4.__proto__ || Object.getPrototypeOf(H4)).apply(this, arguments));
  }

  _createClass(H4, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h4',
        this.props,
        this.props.children
      );
    }
  }]);

  return H4;
}(_react.Component);

var H5 = function (_Component5) {
  _inherits(H5, _Component5);

  function H5() {
    _classCallCheck(this, H5);

    return _possibleConstructorReturn(this, (H5.__proto__ || Object.getPrototypeOf(H5)).apply(this, arguments));
  }

  _createClass(H5, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h5',
        this.props,
        this.props.children
      );
    }
  }]);

  return H5;
}(_react.Component);

var H6 = function (_Component6) {
  _inherits(H6, _Component6);

  function H6() {
    _classCallCheck(this, H6);

    return _possibleConstructorReturn(this, (H6.__proto__ || Object.getPrototypeOf(H6)).apply(this, arguments));
  }

  _createClass(H6, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h6',
        this.props,
        this.props.children
      );
    }
  }]);

  return H6;
}(_react.Component);

var BH1 = (0, _utilities.stack)(H1, _utilities.domStack);
var BH2 = (0, _utilities.stack)(H2, _utilities.domStack);
var BH3 = (0, _utilities.stack)(H3, _utilities.domStack);
var BH4 = (0, _utilities.stack)(H4, _utilities.domStack);
var BH5 = (0, _utilities.stack)(H5, _utilities.domStack);
var BH6 = (0, _utilities.stack)(H6, _utilities.domStack);

exports.BH1 = BH1;
exports.BH2 = BH2;
exports.BH3 = BH3;
exports.BH4 = BH4;
exports.BH5 = BH5;
exports.BH6 = BH6;