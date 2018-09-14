import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Canvas extends Component {
  render() {
    return <canvas {...this.props}>{this.props.children}</canvas>
  }
}

export default stack(Canvas, domStack);
