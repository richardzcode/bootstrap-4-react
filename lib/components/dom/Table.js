'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BTbody = exports.BTfoot = exports.BThead = exports.BTh = exports.BTd = exports.BTr = exports.BTable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilities = require('../../utilities');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_Component) {
  _inherits(Table, _Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
  }

  _createClass(Table, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'table',
        this.props,
        this.props.children
      );
    }
  }]);

  return Table;
}(_react.Component);

var Tr = function (_Component2) {
  _inherits(Tr, _Component2);

  function Tr() {
    _classCallCheck(this, Tr);

    return _possibleConstructorReturn(this, (Tr.__proto__ || Object.getPrototypeOf(Tr)).apply(this, arguments));
  }

  _createClass(Tr, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'tr',
        this.props,
        this.props.children
      );
    }
  }]);

  return Tr;
}(_react.Component);

var Td = function (_Component3) {
  _inherits(Td, _Component3);

  function Td() {
    _classCallCheck(this, Td);

    return _possibleConstructorReturn(this, (Td.__proto__ || Object.getPrototypeOf(Td)).apply(this, arguments));
  }

  _createClass(Td, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'td',
        this.props,
        this.props.children
      );
    }
  }]);

  return Td;
}(_react.Component);

var Th = function (_Component4) {
  _inherits(Th, _Component4);

  function Th() {
    _classCallCheck(this, Th);

    return _possibleConstructorReturn(this, (Th.__proto__ || Object.getPrototypeOf(Th)).apply(this, arguments));
  }

  _createClass(Th, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'th',
        this.props,
        this.props.children
      );
    }
  }]);

  return Th;
}(_react.Component);

var Thead = function (_Component5) {
  _inherits(Thead, _Component5);

  function Thead() {
    _classCallCheck(this, Thead);

    return _possibleConstructorReturn(this, (Thead.__proto__ || Object.getPrototypeOf(Thead)).apply(this, arguments));
  }

  _createClass(Thead, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'thead',
        this.props,
        this.props.children
      );
    }
  }]);

  return Thead;
}(_react.Component);

var Tfoot = function (_Component6) {
  _inherits(Tfoot, _Component6);

  function Tfoot() {
    _classCallCheck(this, Tfoot);

    return _possibleConstructorReturn(this, (Tfoot.__proto__ || Object.getPrototypeOf(Tfoot)).apply(this, arguments));
  }

  _createClass(Tfoot, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'tfoot',
        this.props,
        this.props.children
      );
    }
  }]);

  return Tfoot;
}(_react.Component);

var Tbody = function (_Component7) {
  _inherits(Tbody, _Component7);

  function Tbody() {
    _classCallCheck(this, Tbody);

    return _possibleConstructorReturn(this, (Tbody.__proto__ || Object.getPrototypeOf(Tbody)).apply(this, arguments));
  }

  _createClass(Tbody, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'tbody',
        this.props,
        this.props.children
      );
    }
  }]);

  return Tbody;
}(_react.Component);

var BTable = (0, _utilities.stack)(Table, _utilities.domStack);
var BTr = (0, _utilities.stack)(Tr, _utilities.domStack);
var BTd = (0, _utilities.stack)(Td, _utilities.domStack);
var BTh = (0, _utilities.stack)(Th, _utilities.domStack);
var BThead = (0, _utilities.stack)(Thead, _utilities.domStack);
var BTfoot = (0, _utilities.stack)(Tfoot, _utilities.domStack);
var BTbody = (0, _utilities.stack)(Tbody, _utilities.domStack);

exports.BTable = BTable;
exports.BTr = BTr;
exports.BTd = BTd;
exports.BTh = BTh;
exports.BThead = BThead;
exports.BTfoot = BTfoot;
exports.BTbody = BTbody;