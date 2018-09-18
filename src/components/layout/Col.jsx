import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, flatClassName, withClassName } from '../../utilities';
import { BDiv, BLabel, BAside, BNav, BMain } from '../dom';

const breakpoints = [ 'xs', 'sm', 'md', 'lg', 'xl' ];

class Col extends Component {
  render() {
    const { xs, sm, md, lg, xl, offset, as } = this.props;
    const cn = mergeClassName(
      this.props,
      [
        xs? 'col-xs' + (typeof xs === 'boolean'? '' : '-' + xs) : '',
        sm? 'col-sm' + (typeof sm === 'boolean'? '' : '-' + sm) : '',
        md? 'col-md' + (typeof md === 'boolean'? '' : '-' + md) : '',
        lg? 'col-lg' + (typeof lg === 'boolean'? '' : '-' + lg) : '',
        xl? 'col-xl' + (typeof xl === 'boolean'? '' : '-' + xl) : '',
        flatClassName(offset, 'offset')
      ]
    );
    const p = JS.lessProps(
      this.props,
      ['className', 'col', 'offset', 'as'].concat(breakpoints)
    );

    if (as === 'label') { return <BLabel {...p} className={cn}>{this.props.children}</BLabel> }
    if (as === 'aside') { return <BAside {...p} className={cn}>{this.props.children}</BAside> }
    if (as === 'nav') { return <BNav {...p} className={cn}>{this.props.children}</BNav> }
    if (as === 'main') { return <BMain {...p} className={cn}>{this.props.children}</BMain> }

    return <BDiv {...p} className={cn}>{this.props.children}</BDiv>
  }
}

function colClassName(props) {
  const { col, xs, sm, md, lg, xl } = props;
  const hasSpecific = xs || sm || md || lg || xl;
  return col
    ? flatClassName(col, 'col').replace('col-col', 'col')
    : (hasSpecific? '' : 'col');
}

export default withClassName(colClassName)(Col);
