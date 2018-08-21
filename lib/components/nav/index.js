'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = require('./NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

var _NavLink = require('./NavLink');

var _NavLink2 = _interopRequireDefault(_NavLink);

var _NavItemLink = require('./NavItemLink');

var _NavItemLink2 = _interopRequireDefault(_NavItemLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Nav2.default.Item = _NavItem2.default;
_Nav2.default.Link = _NavLink2.default;
_Nav2.default.ItemLink = _NavItemLink2.default;

exports.default = _Nav2.default;