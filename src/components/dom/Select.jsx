import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, domStack } from '../../utilities';

class Select extends Component {
  render() {
    const { htmlDisabled } = this.props;
    const p = JS.lessProps(this.props, 'htmlDisabled');

    return htmlDisabled
      ? <select {...p} disabled>{this.props.children}</select>
      : <select {...p}>{this.props.children}</select>
  }
}

export default stack(Select, domStack);
