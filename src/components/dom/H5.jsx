import React, { Component } from 'react';

import { domStack } from './common';

class H5 extends Component {
  render() {
    return <h5 {...this.props}>{this.props.children}</h5>
  }
}

export default domStack(H5);
