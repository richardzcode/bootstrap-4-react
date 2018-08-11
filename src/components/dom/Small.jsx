import React, { Component } from 'react';

import { domStack } from './common';

class Small extends Component {
  render() {
    return <small {...this.props}>{this.props.children}</small>
  }
}

export default domStack(Small);
