import React, { Component } from 'react';

import { domStack } from './common';

class Blockquote extends Component {
  render() {
    return <blockquote {...this.props}>{this.props.children}</blockquote>
  }
}

export default domStack(Blockquote);
