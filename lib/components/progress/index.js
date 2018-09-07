'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Progress = require('./Progress');

var _Progress2 = _interopRequireDefault(_Progress);

var _ProgressBar = require('./ProgressBar');

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Progress2.default.Bar = _ProgressBar2.default;

exports.default = _Progress2.default;