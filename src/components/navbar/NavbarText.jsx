import React, { Component } from 'react';
import { JS } from 'fsts';

import { withClassName } from '../../utilities';
import { BSpan } from '../dom';

class NavbarText extends Component {
  render() {
    return <BSpan {...this.props}>{this.props.children}</BSpan>
  }
}

export default withClassName('navbar-text')(NavbarText);
