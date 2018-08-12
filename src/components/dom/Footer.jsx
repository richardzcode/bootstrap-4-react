import React, { Component } from 'react';

import { domStack } from './common';

class Footer extends Component {
  render() {
    return <footer {...this.props}>{this.props.children}</footer>
  }
}

export default domStack(Footer);
