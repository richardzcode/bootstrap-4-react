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

var ProgressBar = function (_Component) {
  _inherits(ProgressBar, _Component);

  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    return _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).apply(this, arguments));
  }

  _createClass(ProgressBar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          striped = _props.striped,
          animated = _props.animated,
          min = _props.min,
          max = _props.max,
          now = _props.now;

      var cn = (0, _utilities.mergeClassName)(this.props, [striped ? 'progress-bar-striped' : '', animated ? 'progress-bar-animated' : '']);
      var p = _fsts.JS.lessProps(this.props, ['className', 'role', 'striped', 'animated', 'min', 'max', 'now']);

      if (min !== undefined && !p['aria-valuemin']) {
        p['aria-valuemin'] = min;
      }
      if (max !== undefined && !p['aria-valuemax']) {
        p['aria-valuemax'] = max;
      }
      if (now !== undefined && !p['aria-valuenow']) {
        p['aria-valuenow'] = now;
      }

      if (_fsts.JS.isNumber(min) && _fsts.JS.isNumber(max) && _fsts.JS.isNumber(now)) {
        var width = (now - min) / (max - min);
        if (width > 0) {
          var style = p.style || {};
          if (!style.width) {
            style.width = width * 100 + '%';
          }
          if (!p.style) {
            p.style = style;
          }
        }
      }

      return _react2.default.createElement(
        _dom.BDiv,
        _extends({}, p, { className: cn, role: 'progressbar' }),
        this.props.children
      );
    }
  }]);

  return ProgressBar;
}(_react.Component);

exports.default = (0, _utilities.withClassName)('progress-bar')(ProgressBar);