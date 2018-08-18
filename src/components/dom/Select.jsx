import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Select extends Component {
  render() {
    return <select {...this.props}>{this.props.children}</select>
  }
}

export default stack(Select, domStack);
