import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Div extends Component {
  render() {
    return <div {...this.props}>{this.props.children}</div>
  }
}

export default stack(Div, domStack);
