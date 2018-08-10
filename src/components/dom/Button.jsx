import React, { Component } from 'react';

import { domStack } from './common';

class Button extends Component {
  render() {
    return <button {...this.props}>{this.props.children}</button>
  }
}

export default domStack(Button);
