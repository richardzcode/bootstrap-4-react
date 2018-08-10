'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Figure = require('./Figure');

var _Figure2 = _interopRequireDefault(_Figure);

var _FigureImage = require('./FigureImage');

var _FigureImage2 = _interopRequireDefault(_FigureImage);

var _FigureCaption = require('./FigureCaption');

var _FigureCaption2 = _interopRequireDefault(_FigureCaption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Figure2.default.Image = _FigureImage2.default;
_Figure2.default.Caption = _FigureCaption2.default;

exports.default = _Figure2.default;