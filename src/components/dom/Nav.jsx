import React, { Component } from 'react';

import { domStack } from './common';

class Nav extends Component {
  render() {
    return <nav {...this.props}>{this.props.children}</nav>
  }
}

export default domStack(Nav);
