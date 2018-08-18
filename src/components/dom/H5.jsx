import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class H5 extends Component {
  render() {
    return <h5 {...this.props}>{this.props.children}</h5>
  }
}

export default stack(H5, domStack);
