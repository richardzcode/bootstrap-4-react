import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, withClassName, withPurpose } from '../utilities';

class Alert extends Component {
  render() {
    const p = JS.lessProps(this.props, 'role');

    return (
      <div
        role="alert"
        {...p}
      >
        {this.props.children}
      </div>
    )
  }
}

export default stack(
  Alert,
  [
    withClassName('alert'),
    withPurpose('alert')
  ]
);
