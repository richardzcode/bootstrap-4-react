import React, { Component } from 'react';

import { domStack } from './common';

class A extends Component {
  render() {
    return <a {...this.props}>{this.props.children}</a>
  }
}

export default domStack(A);
