import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, withClassName, withColor, withSpacing } from '../../utilities';

class DropdownHeader extends Component {
  render() {
    const h = this.props.h || 5;
    const p = JS.lessProps(this.props, 'h');
    return React.createElement(
      'h' + h,
      p,
      p.children
    );
  }
}

export default stack(
  DropdownHeader,
  [
    withClassName('dropdown-header'),
    withColor(),
    withSpacing()
  ]
);
