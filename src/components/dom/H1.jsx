import React, { Component } from 'react';

import { domStack } from './common';

class H1 extends Component {
  render() {
    return <h1 {...this.props}>{this.props.children}</h1>
  }
}

export default domStack(H1);
