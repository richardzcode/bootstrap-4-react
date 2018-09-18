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

var breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];

var Col = function (_Component) {
  _inherits(Col, _Component);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
  }

  _createClass(Col, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          xs = _props.xs,
          sm = _props.sm,
          md = _props.md,
          lg = _props.lg,
          xl = _props.xl,
          offset = _props.offset,
          as = _props.as;

      var cn = (0, _utilities.mergeClassName)(this.props, [xs ? 'col-xs' + (typeof xs === 'boolean' ? '' : '-' + xs) : '', sm ? 'col-sm' + (typeof sm === 'boolean' ? '' : '-' + sm) : '', md ? 'col-md' + (typeof md === 'boolean' ? '' : '-' + md) : '', lg ? 'col-lg' + (typeof lg === 'boolean' ? '' : '-' + lg) : '', xl ? 'col-xl' + (typeof xl === 'boolean' ? '' : '-' + xl) : '', (0, _utilities.flatClassName)(offset, 'offset')]);
      var p = _fsts.JS.lessProps(this.props, ['className', 'col', 'offset', 'as'].concat(breakpoints));

      if (as === 'label') {
        return _react2.default.createElement(
          _dom.BLabel,
          _extends({}, p, { className: cn }),
          this.props.children
        );
      }
      if (as === 'aside') {
        return _react2.default.createElement(
          _dom.BAside,
          _extends({}, p, { className: cn }),
          this.props.children
        );
      }
      if (as === 'nav') {
        return _react2.default.createElement(
          _dom.BNav,
          _extends({}, p, { className: cn }),
          this.props.children
        );
      }
      if (as === 'main') {
        return _react2.default.createElement(
          _dom.BMain,
          _extends({}, p, { className: cn }),
          this.props.children
        );
      }

      return _react2.default.createElement(
        _dom.BDiv,
        _extends({}, p, { className: cn }),
        this.props.children
      );
    }
  }]);

  return Col;
}(_react.Component);

function colClassName(props) {
  var col = props.col,
      xs = props.xs,
      sm = props.sm,
      md = props.md,
      lg = props.lg,
      xl = props.xl;

  var hasSpecific = xs || sm || md || lg || xl;
  return col ? (0, _utilities.flatClassName)(col, 'col').replace('col-col', 'col') : hasSpecific ? '' : 'col';
}

exports.default = (0, _utilities.withClassName)(colClassName)(Col);