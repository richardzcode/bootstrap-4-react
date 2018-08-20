import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, mergeClassName, flatClassName, withClassName, withPurpose } from '../../utilities';
import { BNav, BHeader } from '../dom';

function expandClassName(expand) {
  if (!expand) { return []; }
  return [].concat(expand)
    .filter(item => !!item)
    .map(item => 'navbar-expand-' + item);
}

class Navbar extends Component {
  render() {
    const { expand, as } = this.props;
    const cn = mergeClassName(this.props, flatClassName(expand, 'navbar-expand'));
    const p = JS.lessProps(this.props, ['className', 'expand', 'as']);

    return (as === 'header')
      ? <BHeader {...p} className={cn}>{this.props.children}</BHeader>
      : <BNav {...p} className={cn}>{this.props.children}</BNav>
  }
}

export default stack(
  Navbar,
  [
    withClassName('navbar'),
    withPurpose('navbar')
  ]
);
