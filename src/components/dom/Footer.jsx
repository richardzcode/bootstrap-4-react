import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Footer extends Component {
  render() {
    return <footer {...this.props}>{this.props.children}</footer>
  }
}

export default stack(Footer, domStack);
