import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Aside extends Component {
  render() {
    return <aside {...this.props}>{this.props.children}</aside>
  }
}

export default stack(Aside, domStack);
