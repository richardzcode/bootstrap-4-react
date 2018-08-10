import React, { Component } from 'react';

import { stack, withColor, withSpacing, withBorder } from '../../utilities';

class Img extends Component {
  render() {
    return <img {...this.props}>{this.props.children}</img>
  }
}

export default stack(
  Img,
  [
    withColor(),
    withSpacing(),
    withBorder()
  ]
);
