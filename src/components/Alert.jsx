import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, withClassName, withPurpose } from '../utilities';
import { _Div } from './dom';

class Alert extends Component {
  render() {
    const p = JS.lessProps(this.props, 'role');

    return <_Div role="alert" {...p}>{this.props.children}</_Div>
  }
}

export default stack(
  Alert,
  [
    withClassName('alert'),
    withPurpose('alert')
  ]
);
