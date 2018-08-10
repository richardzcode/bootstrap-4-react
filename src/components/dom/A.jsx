import React, { Component } from 'react';

import { stack, withColor, withSpacing, withBorder } from '../../utilities';

class A extends Component {
  render() {
    return <a {...this.props}>{this.props.children}</a>
  }
}

export default stack(
  A,
  [
    withColor(),
    withSpacing(),
    withBorder()
  ]
);
