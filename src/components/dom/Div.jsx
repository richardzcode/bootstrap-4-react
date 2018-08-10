import React, { Component } from 'react';

import { domStack } from './common';

class Div extends Component {
  render() {
    return <div {...this.props}>{this.props.children}</div>
  }
}

export default domStack(Div);
