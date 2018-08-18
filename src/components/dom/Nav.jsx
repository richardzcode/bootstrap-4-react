import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Nav extends Component {
  render() {
    return <nav {...this.props}>{this.props.children}</nav>
  }
}

export default stack(Nav, domStack);
