import React, { Component } from 'react';

import { withClassName } from '../../utilities';
import { _A } from '../dom';

class CardLink extends Component {
  render() {
    return <_A {...this.props}>{this.props.children}</_A>
  }
}

export default withClassName('card-link')(CardLink);
