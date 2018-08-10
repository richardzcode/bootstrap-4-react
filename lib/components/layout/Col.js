'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
          order = _props.order;

      var cn = (0, _utilities.mergeClassName)(this.props, [xs ? 'col-xs-' + xs : '', sm ? 'col-sm-' + sm : '', md ? 'col-md-' + md : '', lg ? 'col-lg-' + lg : '', xl ? 'col-xl-' + xl : '', order ? 'order-' + order : '']);
      var p = _fsts.JS.lessProps(this.props, ['className', 'col', 'order'].concat(breakpoints));

      return _react2.default.createElement(
        _dom.BDiv,
        p,
        this.props.children
      );
    }
  }]);

  return Col;
}(_react.Component);

function colClassName(props) {
  var col = props.col;

  return col ? 'col-' + col : 'col';
}

exports.default = (0, _utilities.withClassName)(colClassName)(Col);