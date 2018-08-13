import React, { Component } from 'react';

import { withClassName } from '../../utilities';
import { BUl } from '../dom';

class NavbarNav extends Component {
  render() {
    return <BUl {...this.props}>{this.props.children}</BUl>
  }
}

export default withClassName('navbar-nav')(NavbarNav);
