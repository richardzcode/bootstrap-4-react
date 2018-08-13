import React, { Component } from 'react';

import { withClassName } from '../../utilities';
import { BDiv } from '../dom';

class Container extends Component {
  render() {
    const p = JS.lessProps(this.props, 'fluid');

    return <BDiv {...p}>{this.props.children}</BDiv>
  }
}

function containerClassName(props) {
  const { fluid } = props;
  return fluid? 'container-fluid' : 'container';
}

export default withClassName(containerClassName)(Container);
