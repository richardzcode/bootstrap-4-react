'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Carousel = require('./Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

var _CarouselInner = require('./CarouselInner');

var _CarouselInner2 = _interopRequireDefault(_CarouselInner);

var _CarouselItem = require('./CarouselItem');

var _CarouselItem2 = _interopRequireDefault(_CarouselItem);

var _CarouselCaption = require('./CarouselCaption');

var _CarouselCaption2 = _interopRequireDefault(_CarouselCaption);

var _CarouselControlPrev = require('./CarouselControlPrev');

var _CarouselControlPrev2 = _interopRequireDefault(_CarouselControlPrev);

var _CarouselControlPrevIcon = require('./CarouselControlPrevIcon');

var _CarouselControlPrevIcon2 = _interopRequireDefault(_CarouselControlPrevIcon);

var _CarouselControlNext = require('./CarouselControlNext');

var _CarouselControlNext2 = _interopRequireDefault(_CarouselControlNext);

var _CarouselControlNextIcon = require('./CarouselControlNextIcon');

var _CarouselControlNextIcon2 = _interopRequireDefault(_CarouselControlNextIcon);

var _CarouselIndicators = require('./CarouselIndicators');

var _CarouselIndicators2 = _interopRequireDefault(_CarouselIndicators);

var _CarouselIndicator = require('./CarouselIndicator');

var _CarouselIndicator2 = _interopRequireDefault(_CarouselIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Carousel2.default.Inner = _CarouselInner2.default;
_Carousel2.default.Item = _CarouselItem2.default;
_Carousel2.default.Caption = _CarouselCaption2.default;
_Carousel2.default.Prev = _CarouselControlPrev2.default;
_Carousel2.default.Next = _CarouselControlNext2.default;
_Carousel2.default.Indicators = _CarouselIndicators2.default;
_Carousel2.default.Indicator = _CarouselIndicator2.default;

_Carousel2.default.Prev.Icon = _CarouselControlPrevIcon2.default;
_Carousel2.default.Next.Icon = _CarouselControlNextIcon2.default;

exports.default = _Carousel2.default;