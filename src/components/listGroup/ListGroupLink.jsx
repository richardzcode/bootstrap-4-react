import React, { Component } from 'react';

import { stack, withClassName, withPurpose } from '../../utilities';
import { BA } from '../dom';

class ListGroupLink extends Component {
  render() {
    return <BA {...this.props}>{this.props.children}</BA>
  }
}

export default stack(
  ListGroupLink,
  [
    withClassName('list-group-item list-group-item-action'),
    withPurpose('list-group-item')
  ]
);
