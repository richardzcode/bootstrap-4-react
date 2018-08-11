import React, { Component } from 'react';

import { domStack } from './common';

class Input extends Component {
  render() {
    return <input {...this.props}>{this.props.children}</input>
  }
}

export default domStack(Input);
