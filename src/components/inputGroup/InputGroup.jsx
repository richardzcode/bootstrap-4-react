import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, withClassName } from '../../utilities';
import { BDiv } from '../dom';

class InputGroup extends Component {
  render() {
    const { lg, sm } = this.props;
    const cn = mergeClassName(
      this.props,
      [
        lg? 'input-group-lg' : '',
        sm? 'input-group-sm' : ''
      ]
    );
    const p = JS.lessProps(this.props, ['className', 'lg', 'sm']);

    return <BDiv className={cn} {...p}>{this.props.children}</BDiv>
  }
}

export default withClassName('input-group')(InputGroup);
