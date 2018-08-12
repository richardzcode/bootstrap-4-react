import React, { Component } from 'react';

import { stack, withClassName, withPurpose } from '../../utilities';
import { BButton } from '../dom';

class ListGroupButton extends Component {
  render() {
    return <BButton {...this.props}>{this.props.children}</BButton>
  }
}

export default stack(
  ListGroupButton,
  [
    withClassName('list-group-item list-group-item-action'),
    withPurpose('list-group-item')
  ]
);
