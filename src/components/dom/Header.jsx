import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Header extends Component {
  render() {
    return <header {...this.props}>{this.props.children}</header>
  }
}

export default stack(Header, domStack);
