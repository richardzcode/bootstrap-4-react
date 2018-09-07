'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _PageItem = require('./PageItem');

var _PageItem2 = _interopRequireDefault(_PageItem);

var _PageLink = require('./PageLink');

var _PageLink2 = _interopRequireDefault(_PageLink);

var _PageItemLink = require('./PageItemLink');

var _PageItemLink2 = _interopRequireDefault(_PageItemLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Pagination2.default.Item = _PageItem2.default;
_Pagination2.default.Link = _PageLink2.default;
_Pagination2.default.ItemLink = _PageItemLink2.default;

exports.default = _Pagination2.default;