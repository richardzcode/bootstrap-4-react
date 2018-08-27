import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, domStack } from '../../utilities';

class Button extends Component {
  render() {
    const { htmlDisabled } = this.props;
    const p = JS.lessProps(this.props, 'htmlDisabled');

    return htmlDisabled
      ? <button {...p} disabled>{this.props.children}</button>
      : <button {...p}>{this.props.children}</button>
  }
}

export default stack(Button, domStack);
