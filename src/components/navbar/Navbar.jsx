import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, mergeClassName, withClassName, withPurpose } from '../../utilities';
import { BNav } from '../dom';

function expandClassName(expand) {
  if (!expand) { return []; }
  return [].concat(expand)
    .filter(item => !!item)
    .map(item => 'navbar-expand-' + item);
}

class Navbar extends Component {
  render() {
    const { expand } = this.props;
    const cn = mergeClassName(this.props, expandClassName(expand));
    const p = JS.lessProps(this.props, ['className', 'expand']);

    return <BNav {...p} className={cn}>{this.props.children}</BNav>
  }
}

export default stack(
  Navbar,
  [
    withClassName('navbar'),
    withPurpose('navbar')
  ]
);
