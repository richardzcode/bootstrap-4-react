import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Span extends Component {
  render() {
    return <span {...this.props}>{this.props.children}</span>
  }
}

export default stack(Span, domStack);
