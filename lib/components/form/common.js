'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.withSizing = withSizing;
exports.withValidation = withValidation;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fsts = require('fsts');

var _utilities = require('../../utilities');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withSizing() {
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
          var _props = this.props,
              lg = _props.lg,
              sm = _props.sm;

          var cn = (0, _utilities.mergeClassName)(this.props, [lg ? 'form-control-lg' : '', sm ? 'form-control-sm' : '']);
          var p = _fsts.JS.lessProps(this.props, ['className', 'lg', 'sm']);

          return _react2.default.createElement(Comp, _extends({}, p, { className: cn }));
        }
      }]);

      return _class;
    }(_react.Component);
  };
}

function withValidation() {
  return function (Comp) {
    return function (_Component2) {
      _inherits(_class2, _Component2);

      function _class2() {
        _classCallCheck(this, _class2);

        return _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).apply(this, arguments));
      }

      _createClass(_class2, [{
        key: 'render',
        value: function render() {
          var valid = this.props.valid;

          var cn = (0, _utilities.mergeClassName)(this.props, [valid === true ? 'is-valid' : '', valid === false ? 'is-invalid' : '']);
          var p = _fsts.JS.lessProps(this.props, ['className', 'valid']);

          return _react2.default.createElement(Comp, _extends({}, p, { className: cn }));
        }
      }]);

      return _class2;
    }(_react.Component);
  };
}