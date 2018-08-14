import 'bootstrap-4-required';
import { Logger } from 'fsts';

const logger = new Logger('Bootstrap');

export * from './components';

function tooltip(selector, options) {
  selector = selector || '[data-toggle="tooltip"]';
  if ($) {
    $(selector).tooltip(options)
  } else {
    logger.warn('no jQuery available');
  }
}

const Bootstrap = {
  tooltip
}

export default Bootstrap;
