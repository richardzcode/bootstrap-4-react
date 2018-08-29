'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fsts = require('fsts');

var _utilities = require('../../utilities');

var _dom = require('../dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormCustomRadio = function (_Component) {
  _inherits(FormCustomRadio, _Component);

  function FormCustomRadio() {
    _classCallCheck(this, FormCustomRadio);

    return _possibleConstructorReturn(this, (FormCustomRadio.__proto__ || Object.getPrototypeOf(FormCustomRadio)).apply(this, arguments));
  }

  _createClass(FormCustomRadio, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          inline = _props.inline,
          id = _props.id,
          name = _props.name,
          checked = _props.checked,
          disabled = _props.disabled;

      var cn = (0, _utilities.mergeClassName)(this.props, inline ? 'custom-control-inline' : '');
      var p = _fsts.JS.lessProps(this.props, ['className', 'inline', 'id', 'name', 'checked', 'disabled']);

      var input_p = {
        type: 'radio',
        className: 'custom-control-input',
        id: id,
        name: name
      };

      return _react2.default.createElement(
        _dom.BDiv,
        _extends({ className: cn }, p),
        disabled ? checked ? _react2.default.createElement('input', _extends({}, input_p, { checked: true, disabled: true })) : _react2.default.createElement('input', _extends({}, input_p, { disabled: true })) : checked ? _react2.default.createElement('input', _extends({}, input_p, { checked: true })) : _react2.default.createElement('input', input_p),
        _react2.default.createElement(
          'label',
          { className: 'custom-control-label', htmlFor: id },
          this.props.children
        )
      );
    }
  }]);

  return FormCustomRadio;
}(_react.Component);

exports.default = (0, _utilities.withClassName)('custom-control custom-radio')(FormCustomRadio);