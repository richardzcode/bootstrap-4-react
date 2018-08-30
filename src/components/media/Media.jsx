import React, { Component } from 'react';
import { JS } from 'fsts';

import { withClassName } from '../../utilities';
import { BDiv, BLi } from '../dom';

class Media extends Component {
  render() {
    const { as } = this.props;
    const p = JS.lessProps(this.props, 'as');

    return as === 'li'
      ? <BLi {...p}>{this.props.children}</BLi>
      : <BDiv {...p}>{this.props.children}</BDiv>
  }
}

export default withClassName('media')(Media);
