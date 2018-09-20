import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, domStack } from '../../utilities';

function preventDefaultFn(fn) {
  return function(event) {
    fn(event);
    event.preventDefault();
  }
}

class Button extends Component {
  render() {
    const { htmlDisabled, preventDefault, onClick } = this.props;
    const p = JS.lessProps(this.props, ['htmlDisabled', 'preventDefault', 'onClick']);

    if (onClick) {
      p.onClick = preventDefault
        ? preventDefaultFn(onClick)
        : onClick
    }

    return htmlDisabled
      ? <button {...p} disabled>{this.props.children}</button>
      : <button {...p}>{this.props.children}</button>
  }
}

export default stack(Button, domStack);
