import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, withClassName, withPurpose } from '../utilities';
import { BDiv } from './dom';

class Alert extends Component {
  render() {
    const p = JS.lessProps(this.props, 'role');

    return <BDiv role="alert" {...p}>{this.props.children}</BDiv>
  }
}

export default stack(
  Alert,
  [
    withClassName('alert'),
    withPurpose('alert')
  ]
);
