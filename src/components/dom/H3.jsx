import React, { Component } from 'react';

import { domStack } from './common';

class H3 extends Component {
  render() {
    return <h3 {...this.props}>{this.props.children}</h3>
  }
}

export default domStack(H3);
