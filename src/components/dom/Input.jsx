import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, domStack } from '../../utilities';

class Input extends Component {
  render() {
    const { htmlDisabled } = this.props;
    const p = JS.lessProps(this.props, 'htmlDisabled');

    return htmlDisabled
      ? <input {...p} disabled>{this.props.children}</input>
      : <input {...p}>{this.props.children}</input>
  }
}

export default stack(Input, domStack);
