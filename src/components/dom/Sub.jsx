import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Sub extends Component {
  render() {
    return <sub {...this.props}>{this.props.children}</sub>
  }
}

export default stack(Sub, domStack);
