import 'bootstrap-4-required';
import { Logger } from 'fsts';

const logger = new Logger('Bootstrap');

export * from './components';

function carousel(selector, options) {
  selector = selector || '.carousel';
  if ($) {
    $(selector).carousel(options)
  } else {
    logger.warn('no jQuery available');
  }

  return this;
}

function popover(selector, options) {
  selector = selector || '[data-toggle="popover"]';
  if ($) {
    $(selector).popover(options)
  } else {
    logger.warn('no jQuery available');
  }

  return this;
}

function tooltip(selector, options) {
  selector = selector || '[data-toggle="tooltip"]';
  if ($) {
    $(selector).tooltip(options)
  } else {
    logger.warn('no jQuery available');
  }

  return this;
}

function modal(selector, options) {
  selector = selector || '.modal';
  if ($) {
    $(selector).modal(options)
  } else {
    logger.warn('no jQuery available');
  }

  return this;
}

const Bootstrap = {
  carousel,
  popover,
  tooltip,
  modal
}

import * as Comps from './components';
Object.keys(Comps)
  .forEach(key => {
    Bootstrap[key] = Comps[key];
  });
window.B4R = Bootstrap;

export default Bootstrap;
