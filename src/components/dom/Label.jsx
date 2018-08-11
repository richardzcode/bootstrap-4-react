import React, { Component } from 'react';

import { domStack } from './common';

class Label extends Component {
  render() {
    return <label {...this.props}>{this.props.children}</label>
  }
}

export default domStack(Label);
