import React, { Component } from 'react';

import { stack, withColor, withSpacing } from '../../utilities';

class P extends Component {
  render() {
    return <p {...this.props}>{this.props.children}</p>
  }
}

export default stack(
  P,
  [
    withColor(),
    withSpacing()
  ]
);
