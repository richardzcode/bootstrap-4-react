import React, { Component } from 'react';

import { domStack } from './common';

class Select extends Component {
  render() {
    return <select {...this.props}>{this.props.children}</select>
  }
}

export default domStack(Select);
