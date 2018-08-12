'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _ModalDialog = require('./ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

var _ModalContent = require('./ModalContent');

var _ModalContent2 = _interopRequireDefault(_ModalContent);

var _ModalHeader = require('./ModalHeader');

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _ModalBody = require('./ModalBody');

var _ModalBody2 = _interopRequireDefault(_ModalBody);

var _ModalFooter = require('./ModalFooter');

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

var _ModalTitle = require('./ModalTitle');

var _ModalTitle2 = _interopRequireDefault(_ModalTitle);

var _ModalClose = require('./ModalClose');

var _ModalClose2 = _interopRequireDefault(_ModalClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Modal2.default.Dialog = _ModalDialog2.default;
_Modal2.default.Content = _ModalContent2.default;
_Modal2.default.Header = _ModalHeader2.default;
_Modal2.default.Body = _ModalBody2.default;
_Modal2.default.Footer = _ModalFooter2.default;
_Modal2.default.Title = _ModalTitle2.default;
_Modal2.default.Close = _ModalClose2.default;

exports.default = _Modal2.default;