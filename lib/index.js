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

var Comps = _interopRequireWildcard(_components);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var logger = new _fsts.Logger('Bootstrap');

function carousel(selector, options) {
  selector = selector || '.carousel';
  if ($) {
    $(selector).carousel(options);
  } else {
    logger.warn('no jQuery available');
  }

  return this;
}

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

function modal(selector, options) {
  selector = selector || '.modal';
  if ($) {
    $(selector).modal(options);
  } else {
    logger.warn('no jQuery available');
  }

  return this;
}

var Bootstrap = {
  carousel: carousel,
  popover: popover,
  tooltip: tooltip,
  modal: modal
};

Object.keys(Comps).forEach(function (key) {
  Bootstrap[key] = Comps[key];
});
window.B4R = Bootstrap;

exports.default = Bootstrap;