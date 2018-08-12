'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilities = require('../utilities');

var _dom = require('./dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Blockquote = function (_Component) {
  _inherits(_Blockquote, _Component);

  function _Blockquote() {
    _classCallCheck(this, _Blockquote);

    return _possibleConstructorReturn(this, (_Blockquote.__proto__ || Object.getPrototypeOf(_Blockquote)).apply(this, arguments));
  }

  _createClass(_Blockquote, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _dom.BBlockquote,
        this.props,
        this.props.children
      );
    }
  }]);

  return _Blockquote;
}(_react.Component);

var _BlockquoteFooter = function (_Component2) {
  _inherits(_BlockquoteFooter, _Component2);

  function _BlockquoteFooter() {
    _classCallCheck(this, _BlockquoteFooter);

    return _possibleConstructorReturn(this, (_BlockquoteFooter.__proto__ || Object.getPrototypeOf(_BlockquoteFooter)).apply(this, arguments));
  }

  _createClass(_BlockquoteFooter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _dom.BFooter,
        this.props,
        this.props.children
      );
    }
  }]);

  return _BlockquoteFooter;
}(_react.Component);

var Blockquote = (0, _utilities.withClassName)('blockquote')(_Blockquote);
var BlockquoteFooter = (0, _utilities.withClassName)('blockquote-footer')(_BlockquoteFooter);

Blockquote.Footer = BlockquoteFooter;

exports.default = Blockquote;