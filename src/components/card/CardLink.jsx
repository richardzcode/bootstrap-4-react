import React, { Component } from 'react';

import { withClassName } from '../../utilities';

class CardLink extends Component {
  render() {
    return <a {...this.props}>{this.props.children}</a>
  }
}

export default withClassName('card-link')(CardLink);
