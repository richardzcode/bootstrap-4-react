import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Small extends Component {
  render() {
    return <small {...this.props}>{this.props.children}</small>
  }
}

export default stack(Small, domStack);
