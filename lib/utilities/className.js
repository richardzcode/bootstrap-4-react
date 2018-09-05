'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.mergeClassName = mergeClassName;
exports.flatClassName = flatClassName;
exports.withClassName = withClassName;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fsts = require('fsts');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function mergeClassName(props, className) {
  var cn = [].concat(className || [], props.className || []);
  return cn.filter(function (name) {
    return !!name.trim();
  }).join(' ');
}

function flatClassName(value, prefix) {
  if (value === true) {
    return prefix;
  }
  if (value === false) {
    return prefix + '-none';
  }
  if (!value || !value.trim()) {
    return '';
  }
  return [].concat(value).join(' ').split(' ').map(function (item) {
    return prefix ? prefix + '-' + item : item;
  }).join(' ');
}

function withClassName(name) {
  return function (Comp) {
    return function (_Component) {
      _inherits(_class, _Component);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      _createClass(_class, [{
        key: 'render',
        value: function render() {
          var className = this.props.className;

          var cn = [].concat(typeof name === 'function' ? name(this.props) : name, className || []).join(' ');
          var p = _fsts.JS.lessProps(this.props, 'className');

          return cn ? _react2.default.createElement(
            Comp,
            _extends({}, p, { className: cn }),
            this.props.children
          ) : _react2.default.createElement(
            Comp,
            p,
            this.props.children
          );
        }
      }]);

      return _class;
    }(_react.Component);
  };
}