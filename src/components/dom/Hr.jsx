import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Hr extends Component {
  render() {
    return <hr {...this.props}>{this.props.children}</hr>
  }
}

export default stack(Hr, domStack);
