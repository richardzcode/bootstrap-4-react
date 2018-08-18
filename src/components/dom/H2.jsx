import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class H2 extends Component {
  render() {
    return <h2 {...this.props}>{this.props.children}</h2>
  }
}

export default stack(H2, domStack);
