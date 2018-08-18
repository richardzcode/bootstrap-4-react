import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Label extends Component {
  render() {
    return <label {...this.props}>{this.props.children}</label>
  }
}

export default stack(Label, domStack);
