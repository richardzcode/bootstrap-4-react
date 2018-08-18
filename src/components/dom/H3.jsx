import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class H3 extends Component {
  render() {
    return <h3 {...this.props}>{this.props.children}</h3>
  }
}

export default stack(H3, domStack);
