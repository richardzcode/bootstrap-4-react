import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class A extends Component {
  render() {
    return <a {...this.props}>{this.props.children}</a>
  }
}

export default stack(A, domStack);
