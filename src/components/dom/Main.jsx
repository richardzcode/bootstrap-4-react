import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Main extends Component {
  render() {
    return <main {...this.props}>{this.props.children}</main>
  }
}

export default stack(Main, domStack);
