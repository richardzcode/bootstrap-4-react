import React, { Component } from 'react';
import { JS } from 'fsts';

import { withClassName } from '../../utilities';
import { BDiv, BMain, BHeader, BFooter } from '../dom';

class Container extends Component {
  render() {
    const { as } = this.props;
    const p = JS.lessProps(this.props, ['fluid', 'as']);

    if (as === 'main' ) { return <BMain {...p}>{this.props.children}</BMain> }
    if (as === 'header' ) { return <BHeader {...p}>{this.props.children}</BHeader> }
    if (as === 'footer' ) { return <BFooter {...p}>{this.props.children}</BFooter> }

    return <BDiv {...p}>{this.props.children}</BDiv>
  }
}

function containerClassName(props) {
  const { fluid } = props;
  return fluid? 'container-fluid' : 'container';
}

export default withClassName(containerClassName)(Container);
