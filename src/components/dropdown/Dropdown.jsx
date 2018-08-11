import React, { Component } from 'react';

import { stack, withClassName, withDrop } from '../../utilities';
import { BDiv } from '../dom';

class Dropdown extends Component {
  render() {
    return <BDiv {...this.props}>{this.props.children}</BDiv>
  }
}

export default stack(
  Dropdown,
  [
    withClassName('dropdown'),
    withDrop()
  ]
);
