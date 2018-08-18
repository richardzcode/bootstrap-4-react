import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class H1 extends Component {
  render() {
    return <h1 {...this.props}>{this.props.children}</h1>
  }
}

export default stack(H1, domStack);
