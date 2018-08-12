import React, { Component } from 'react';

import { domStack } from './common';

class H4 extends Component {
  render() {
    return <h4 {...this.props}>{this.props.children}</h4>
  }
}

export default domStack(H4);
