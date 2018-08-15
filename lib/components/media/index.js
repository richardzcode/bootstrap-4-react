'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Media = require('./Media');

var _Media2 = _interopRequireDefault(_Media);

var _MediaBody = require('./MediaBody');

var _MediaBody2 = _interopRequireDefault(_MediaBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Media2.default.Body = _MediaBody2.default;

exports.default = _Media2.default;