import React, { Component } from 'react';

import { domStack } from './common';

class Span extends Component {
  render() {
    return <span {...this.props}>{this.props.children}</span>
  }
}

export default domStack(Span);
