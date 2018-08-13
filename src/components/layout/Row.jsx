import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, withClassName } from '../../utilities';
import { BDiv } from '../dom';

class Row extends Component {
  render() {
    const { noGutters } = this.props;
    const cn = mergeClassName(this.props, noGutters? 'no-gutters' : '');
    const p = JS.lessProps(this.props, ['className', 'noGutters']);
    
    return <BDiv className={cn} {...p}>{this.props.children}</BDiv>
  }
}

export default withClassName('row')(Row);
