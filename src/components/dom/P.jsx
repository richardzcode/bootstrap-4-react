import React, { Component } from 'react';

import { domStack } from './common';

class P extends Component {
  render() {
    return <p {...this.props}>{this.props.children}</p>
  }
}

export default domStack(P);
