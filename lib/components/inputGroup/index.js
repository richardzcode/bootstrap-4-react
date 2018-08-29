'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _InputGroup = require('./InputGroup');

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _InputGroupPrepend = require('./InputGroupPrepend');

var _InputGroupPrepend2 = _interopRequireDefault(_InputGroupPrepend);

var _InputGroupAppend = require('./InputGroupAppend');

var _InputGroupAppend2 = _interopRequireDefault(_InputGroupAppend);

var _InputGroupText = require('./InputGroupText');

var _InputGroupText2 = _interopRequireDefault(_InputGroupText);

var _InputGroupPrependText = require('./InputGroupPrependText');

var _InputGroupPrependText2 = _interopRequireDefault(_InputGroupPrependText);

var _InputGroupAppendText = require('./InputGroupAppendText');

var _InputGroupAppendText2 = _interopRequireDefault(_InputGroupAppendText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_InputGroup2.default.Prepend = _InputGroupPrepend2.default;
_InputGroup2.default.Append = _InputGroupAppend2.default;
_InputGroup2.default.Text = _InputGroupText2.default;

_InputGroup2.default.PrependText = _InputGroupPrependText2.default;
_InputGroup2.default.AppendText = _InputGroupAppendText2.default;

exports.default = _InputGroup2.default;