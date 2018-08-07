'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function mergeClassName(props, className) {
  var cn = [].concat(props.className || [], className || []);
  return cn.filter(function (name) {
    return !!name.trim();
  }).join(' ');
}

exports.mergeClassName = mergeClassName;