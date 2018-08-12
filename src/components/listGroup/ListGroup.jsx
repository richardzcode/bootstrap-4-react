import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, withClassName } from '../../utilities';
import { BUl, BDiv } from '../dom';

class ListGroup extends Component {
  render() {
    const { flush, as } = this.props;
    const cn = mergeClassName(this.props, flush? 'list-group-flush' : '');
    const p = JS.lessProps(this.props, ['className', 'flush', 'as']);

    return as === 'div'
      ? <BDiv {...p} className={cn}>{this.props.children}</BDiv>
      : <BUl {...p} className={cn}>{this.props.children}</BUl>
  }
}

export default withClassName('list-group')(ListGroup);
