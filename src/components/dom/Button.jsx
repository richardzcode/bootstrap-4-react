import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Button extends Component {
  render() {
    return <button {...this.props}>{this.props.children}</button>
  }
}

export default stack(Button, domStack);
