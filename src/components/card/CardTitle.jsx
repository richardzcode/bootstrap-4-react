import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, domStack, withClassName } from '../../utilities';

class CardTitle extends Component {
  render() {
    const as = this.props.as || 'h5';
    const p = JS.lessProps(this.props, 'as');
    return React.createElement(
      as,
      p,
      p.children
    );
  }
}

export default stack(
  CardTitle,
  domStack.concat(withClassName('card-title'))
);
