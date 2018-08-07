'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removePurposeProps = exports.purposeClassName = undefined;

var _fsts = require('fsts');

var logger = new _fsts.Logger('semantic');

var purposes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'];

function purposeClassName(props, prefix) {
  var found = purposes.filter(function (purpose) {
    return !!props[purpose];
  });

  if (found.length === 0) {
    return '';
  }
  if (found.length > 1) {
    logger.debug('found more than one purpose', found);
  }

  return (prefix ? prefix + '-' : '') + found[0];
}

function removePurposeProps(props) {
  return _fsts.JS.lessProps(props, purposes);
}

exports.purposeClassName = purposeClassName;
exports.removePurposeProps = removePurposeProps;