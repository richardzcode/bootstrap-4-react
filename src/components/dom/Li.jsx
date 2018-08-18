import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Li extends Component {
  render() {
    return <li {...this.props}>{this.props.children}</li>
  }
}

export default stack(Li, domStack);
