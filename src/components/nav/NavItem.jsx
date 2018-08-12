import React, { Component } from 'react';

import { withClassName } from '../../utilities';
import { BLi } from '../dom';

class NavItem extends Component {
  render() {
    return <BLi {...this.props}>{this.props.children}</BLi>
  }
}

export default withClassName('nav-item')(NavItem);
