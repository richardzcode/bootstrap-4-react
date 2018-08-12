import React, { Component } from 'react';

import { stack, withClassName, withPurpose } from '../../utilities';
import { BLi } from '../dom';

class ListGroupItem extends Component {
  render() {
    return <BLi {...this.props}>{this.props.children}</BLi>
  }
}

export default stack(
  ListGroupItem,
  [
    withClassName('list-group-item'),
    withPurpose('list-group-item')
  ]
);
