import React, { Component } from 'react';

import { withClassName } from '../../utilities';
import { BA } from '../dom';

class CardLink extends Component {
  render() {
    return <BA {...this.props}>{this.props.children}</BA>
  }
}

export default withClassName('card-link')(CardLink);
