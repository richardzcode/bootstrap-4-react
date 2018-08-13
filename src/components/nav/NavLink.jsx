import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, withClassName } from '../../utilities';
import { BA } from '../dom';

class NavLink extends Component {
  render() {
    const { dropdownToggle } = this.props;
    const cn = mergeClassName(this.props, dropdownToggle? 'dropdown-toggle' : '');
    const p = JS.lessProps(this.props, ['className', 'dropdownToggle']);

    return <BA {...p} className={cn} data-toggle={dropdownToggle? 'dropdown' : ''}>{this.props.children}</BA>
  }
}

export default withClassName('nav-link')(NavLink);
