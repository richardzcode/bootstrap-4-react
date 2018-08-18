import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Ol extends Component {
  render() {
    return <ol {...this.props}>{this.props.children}</ol>
  }
}

export default stack(Ol, domStack);
