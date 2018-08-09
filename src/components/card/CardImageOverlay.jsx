import React, { Component } from 'react';

import { withClassName } from '../../utilities';

class CardImageOverlay extends Component {
  render() {
    return <div {...this.props}>{this.props.children}</div>
  }
}

export default withClassName('card-img-overlay')(CardImageOverlay);
