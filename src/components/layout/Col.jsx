import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, flatClassName, withClassName } from '../../utilities';
import { BDiv } from '../dom';

const breakpoints = [ 'xs', 'sm', 'md', 'lg', 'xl' ];

class Col extends Component {
  render() {
    const { xs, sm, md, lg, xl } = this.props;
    const cn = mergeClassName(
      this.props,
      [
        xs? 'col-xs' + (typeof xs === 'boolean'? '' : '-' + xs) : '',
        sm? 'col-sm' + (typeof sm === 'boolean'? '' : '-' + sm) : '',
        md? 'col-md' + (typeof md === 'boolean'? '' : '-' + md) : '',
        lg? 'col-lg' + (typeof lg === 'boolean'? '' : '-' + lg) : '',
        xl? 'col-xl' + (typeof xl === 'boolean'? '' : '-' + xl) : ''
      ]
    );
    const p = JS.lessProps(this.props, ['className', 'col'].concat(breakpoints));

    return <BDiv {...p} className={cn}>{this.props.children}</BDiv>
  }
}

function colClassName(props) {
  const { col } = props;
  return col? flatClassName(col, 'col-') : 'col';
}

export default withClassName(colClassName)(Col);
