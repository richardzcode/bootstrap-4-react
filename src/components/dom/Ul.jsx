import React, { Component } from 'react';

import { domStack } from './common';

class Ul extends Component {
  render() {
    return <ul {...this.props}>{this.props.children}</ul>
  }
}

export default domStack(Ul);
