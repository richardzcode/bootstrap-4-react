'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.withFlex = withFlex;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fsts = require('fsts');

var _className = require('./className');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withFlex() {
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
              flex = _props.flex,
              justifyContent = _props.justifyContent,
              alignItems = _props.alignItems,
              alignContent = _props.alignContent,
              alignSelf = _props.alignSelf,
              flexGrow = _props.flexGrow,
              flexShrink = _props.flexShrink,
              order = _props.order;

          var cn = (0, _className.mergeClassName)(this.props, [(0, _className.flatClassName)(flex, 'flex'), (0, _className.flatClassName)(justifyContent, 'justify-content'), (0, _className.flatClassName)(alignItems, 'align-items'), (0, _className.flatClassName)(alignContent, 'align-content'), (0, _className.flatClassName)(alignSelf, 'align-self'), (0, _className.flatClassName)(flexGrow, 'flex-grow'), (0, _className.flatClassName)(flexShrink, 'flex-shrink'), (0, _className.flatClassName)(order, 'order')]);
          var p = _fsts.JS.lessProps(this.props, ['className', 'flex', 'justifyContent', 'alignItems', 'alignContent', 'alignSelf', 'flexGrow', 'flexShrink', 'order']);

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