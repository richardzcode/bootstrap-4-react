import React, { Component } from 'react';

import NavItem from './NavItem';
import NavLink from './NavLink';

export default class NavItemLink extends Component {
  render() {
    return (
      <NavItem>
        <NavLink {...this.props}>{this.props.children}</NavLink>
      </NavItem>
    )
  }
}
