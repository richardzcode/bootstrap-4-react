'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = require('./CardHeader');

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardFooter = require('./CardFooter');

var _CardFooter2 = _interopRequireDefault(_CardFooter);

var _CardImage = require('./CardImage');

var _CardImage2 = _interopRequireDefault(_CardImage);

var _CardImageOverlay = require('./CardImageOverlay');

var _CardImageOverlay2 = _interopRequireDefault(_CardImageOverlay);

var _CardTitle = require('./CardTitle');

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _CardSubtitle = require('./CardSubtitle');

var _CardSubtitle2 = _interopRequireDefault(_CardSubtitle);

var _CardBody = require('./CardBody');

var _CardBody2 = _interopRequireDefault(_CardBody);

var _CardText = require('./CardText');

var _CardText2 = _interopRequireDefault(_CardText);

var _CardLink = require('./CardLink');

var _CardLink2 = _interopRequireDefault(_CardLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Card2.default.Header = _CardHeader2.default;
_Card2.default.Footer = _CardFooter2.default;
_Card2.default.Image = _CardImage2.default;
_Card2.default.ImageOverlay = _CardImageOverlay2.default;
_Card2.default.Title = _CardTitle2.default;
_Card2.default.Subtitle = _CardSubtitle2.default;
_Card2.default.Body = _CardBody2.default;
_Card2.default.Text = _CardText2.default;
_Card2.default.Link = _CardLink2.default;

exports.default = _Card2.default;