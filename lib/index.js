'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _components = require('./components');

Object.keys(_components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _components[key];
    }
  });
});

require('bootstrap-4-required');

var _fsts = require('fsts');

var logger = new _fsts.Logger('Bootstrap');

function popover(selector, options) {
  selector = selector || '[data-toggle="popover"]';
  if ($) {
    $(selector).popover(options);
  } else {
    logger.warn('no jQuery available');
  }

  return this;
}

function tooltip(selector, options) {
  selector = selector || '[data-toggle="tooltip"]';
  if ($) {
    $(selector).tooltip(options);
  } else {
    logger.warn('no jQuery available');
  }

  return this;
}

var Bootstrap = {
  popover: popover,
  tooltip: tooltip
};

exports.default = Bootstrap;