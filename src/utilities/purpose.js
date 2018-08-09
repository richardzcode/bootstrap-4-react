import React, { Component } from 'react';
import { JS, Logger } from 'fsts';

const logger = new Logger('purpose');

const purposes = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
  'link'
];

function purposeClassName(props, prefix) {
  const found = purposes.filter(purpose => !!props[purpose]);

  if (found.length === 0) { return ''; }
  if (found.length > 1) { logger.debug('found more than one purpose', found); }

  return prefix
    ? (typeof prefix === 'function'? prefix(props) : prefix) + '-' + found[0]
    : founc[0];
}

export function withPurpose(prefix) {
  return function(Comp) {
    return class extends Component {
      render() {
        const { className } = this.props;
        const p = JS.lessProps(this.props, purposes.concat('className'));
        const cn = [].concat(className || [], purposeClassName(this.props, prefix));

        return <Comp {...p} className={cn.join(' ')} />
      }
    }
  }
}

export { purposes };
