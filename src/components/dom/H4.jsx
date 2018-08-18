import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class H4 extends Component {
  render() {
    return <h4 {...this.props}>{this.props.children}</h4>
  }
}

export default stack(H4, domStack);
