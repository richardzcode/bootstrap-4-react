import React, { Component } from 'react';

import { domStack } from './common';

class Ol extends Component {
  render() {
    return <ol {...this.props}>{this.props.children}</ol>
  }
}

export default domStack(Ol);
