import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Input extends Component {
  render() {
    return <input {...this.props}>{this.props.children}</input>
  }
}

export default stack(Input, domStack);
