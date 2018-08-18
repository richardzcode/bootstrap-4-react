import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class H6 extends Component {
  render() {
    return <h6 {...this.props}>{this.props.children}</h6>
  }
}

export default stack(H6, domStack);
