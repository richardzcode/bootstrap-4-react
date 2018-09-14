import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Sup extends Component {
  render() {
    return <sup {...this.props}>{this.props.children}</sup>
  }
}

export default stack(Sup, domStack);
