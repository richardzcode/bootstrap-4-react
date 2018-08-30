'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TabContent = require('./TabContent');

var _TabContent2 = _interopRequireDefault(_TabContent);

var _TabPane = require('./TabPane');

var _TabPane2 = _interopRequireDefault(_TabPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tab = {};
Tab.Content = _TabContent2.default;
Tab.Pane = _TabPane2.default;

exports.default = Tab;