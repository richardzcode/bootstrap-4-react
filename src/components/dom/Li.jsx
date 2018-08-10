import React, { Component } from 'react';

import { domStack } from './common';

class Li extends Component {
  render() {
    return <li {...this.props}>{this.props.children}</li>
  }
}

export default domStack(Li);
