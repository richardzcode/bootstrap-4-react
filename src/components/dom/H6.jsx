import React, { Component } from 'react';

import { domStack } from './common';

class H6 extends Component {
  render() {
    return <h6 {...this.props}>{this.props.children}</h6>
  }
}

export default domStack(H6);
