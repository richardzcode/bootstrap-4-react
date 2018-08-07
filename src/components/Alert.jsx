import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName } from './common';
import { withPurpose } from '../utilities';

class Alert extends Component {
  render() {
    const p = JS.lessProps(this.props, ['role', 'className']);

    return (
      <div
        role="alert"
        className={mergeClassName(this.props, 'alert')}
        {...p}
      >
        {this.props.children}
      </div>
    )
  }
}

export default withPurpose(Alert, 'alert');
