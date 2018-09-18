'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fsts = require('fsts');

var _utilities = require('../utilities');

var _dom = require('./dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          block = _props.block,
          active = _props.active,
          disabled = _props.disabled,
          lg = _props.lg,
          sm = _props.sm,
          dropdownToggle = _props.dropdownToggle,
          as = _props.as;

      var cn = (0, _utilities.mergeClassName)(this.props, [lg ? 'btn-lg' : '', sm ? 'btn-sm' : '', block ? 'btn-block' : '', active ? 'active' : '', dropdownToggle ? 'dropdown-toggle' : '', as && as === 'a' && disabled ? 'disabled' : '']);
      var p = _fsts.JS.lessProps(this.props, ['className', 'block', 'outline', 'lg', 'sm', 'dropdownToggle', 'as']);
      if (as && as === 'a' && disabled) {
        p = _fsts.JS.lessProps(p, 'disabled');
      }
      if (active) {
        p['aria-pressed'] = 'true';
      }

      if (!as) {
        return _react2.default.createElement(
          _dom.BButton,
          _extends({ className: cn }, p),
          this.props.children
        );
      }

      switch (as) {
        case 'a':
          return disabled ? _react2.default.createElement(
            _dom.BA,
            _extends({ role: 'button', className: cn }, p, { 'aria-disabled': 'true' }),
            this.props.children
          ) : _react2.default.createElement(
            _dom.BA,
            _extends({ role: 'button', className: cn }, p),
            this.props.children
          );
        case 'input':
          return _react2.default.createElement(
            _dom.BInput,
            _extends({ className: cn }, p),
            this.props.children
          );
        case 'label':
          return _react2.default.createElement(
            _dom.BLabel,
            _extends({ className: cn }, p),
            this.props.children
          );
        default:
          return _react2.default.createElement(
            _dom.BButton,
            _extends({ className: cn }, p),
            this.props.children
          );
      }
    }
  }]);

  return Button;
}(_react.Component);

function purposePrefix(props) {
  var outline = props.outline;

  return outline ? 'btn-outline' : 'btn';
}

exports.default = (0, _utilities.stack)(Button, [(0, _utilities.withClassName)('btn'), (0, _utilities.withPurpose)(purposePrefix), (0, _utilities.withDrop)()]);