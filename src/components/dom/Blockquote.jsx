import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Blockquote extends Component {
  render() {
    return <blockquote {...this.props}>{this.props.children}</blockquote>
  }
}

export default stack(Blockquote, domStack);
