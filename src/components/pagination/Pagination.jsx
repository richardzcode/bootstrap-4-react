import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, withClassName } from '../../utilities';
import { BUl } from '../dom';

class Pagination extends Component {
  render() {
    const { lg, sm } = this.props;
    const cn = mergeClassName(this.props, [
      lg? 'pagination-lg' : '',
      sm? 'pagination-sm' : ''
    ]);
    const p = JS.lessProps(this.props, ['className', 'lg', 'sm']);

    return <BUl {...p} className={cn}>{this.props.children}</BUl>
  }
}

export default withClassName('pagination')(Pagination);
