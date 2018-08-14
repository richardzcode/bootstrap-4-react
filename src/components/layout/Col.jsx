import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, withClassName } from '../../utilities';
import { BDiv } from '../dom';

const breakpoints = [ 'xs', 'sm', 'md', 'lg', 'xl' ];

class Col extends Component {
  render() {
    const { xs, sm, md, lg, xl, order } = this.props;
    const cn = mergeClassName(
      this.props,
      [
        xs? 'col-xs' + (typeof xs === 'boolean'? '' : '-' + xs) : '',
        sm? 'col-sm' + (typeof sm === 'boolean'? '' : '-' + sm) : '',
        md? 'col-md' + (typeof md === 'boolean'? '' : '-' + md) : '',
        lg? 'col-lg' + (typeof lg === 'boolean'? '' : '-' + lg) : '',
        xl? 'col-xl' + (typeof xl === 'boolean'? '' : '-' + xl) : '',
        order? 'order-' + order : ''
      ]
    );
    const p = JS.lessProps(this.props, ['className', 'col', 'order'].concat(breakpoints));

    return <BDiv {...p} className={cn}>{this.props.children}</BDiv>
  }
}

function colClassName(props) {
  const { col } = props;
  return col? 'col-' + col : 'col';
}

export default withClassName(colClassName)(Col);
