import React, { Component } from 'react';

import { stack, withColor, withSpacing, withBorder } from '../../utilities';

class Button extends Component {
  render() {
    return <button {...this.props}>{this.props.children}</button>
  }
}

export default stack(
  Button,
  [
    withColor(),
    withSpacing(),
    withBorder()
  ]
);
