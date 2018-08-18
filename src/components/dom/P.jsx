import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class P extends Component {
  render() {
    return <p {...this.props}>{this.props.children}</p>
  }
}

export default stack(P, domStack);
