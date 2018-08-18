import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Ul extends Component {
  render() {
    return <ul {...this.props}>{this.props.children}</ul>
  }
}

export default stack(Ul, domStack);
