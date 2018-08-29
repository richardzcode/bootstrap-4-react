'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputGroupPrepend = require('./InputGroupPrepend');

var _InputGroupPrepend2 = _interopRequireDefault(_InputGroupPrepend);

var _InputGroupText = require('./InputGroupText');

var _InputGroupText2 = _interopRequireDefault(_InputGroupText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputGroupPrependText = function (_Component) {
  _inherits(InputGroupPrependText, _Component);

  function InputGroupPrependText() {
    _classCallCheck(this, InputGroupPrependText);

    return _possibleConstructorReturn(this, (InputGroupPrependText.__proto__ || Object.getPrototypeOf(InputGroupPrependText)).apply(this, arguments));
  }

  _createClass(InputGroupPrependText, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _InputGroupPrepend2.default,
        null,
        _react2.default.createElement(
          _InputGroupText2.default,
          this.props,
          this.props.children
        )
      );
    }
  }]);

  return InputGroupPrependText;
}(_react.Component);

exports.default = InputGroupPrependText;