import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, domStack } from '../../utilities';

function preventDefaultFn(fn) {
  return function(event) {
    fn(event);
    event.preventDefault();
  }
}

class A extends Component {
  render() {
    const { preventDefault, onClick } = this.props;
    const p = JS.lessProps(this.props, ['preventDefault', 'onClick']);

    if (onClick) {
      p.onClick = preventDefault
        ? preventDefaultFn(onClick)
        : onClick
    }

    return <a {...p}>{this.props.children}</a>
  }
}

export default stack(A, domStack);
