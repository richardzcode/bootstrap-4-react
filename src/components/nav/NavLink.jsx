import React, { Component } from 'react';

import { withClassName } from '../../utilities';
import { BA } from '../dom';

class NavLink extends Component {
  render() {
    return <BA {...this.props}>{this.props.children}</BA>
  }
}

export default withClassName('nav-link')(NavLink);
