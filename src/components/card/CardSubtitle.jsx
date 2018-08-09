import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, withClassName, withColor, withSpacing } from '../../utilities';

class CardSubtitle extends Component {
  render() {
    const h = this.props.h || 6;
    const p = JS.lessProps(this.props, 'h');
    return React.createElement(
      'h' + h,
      p,
      p.children
    );
  }
}

export default stack(
  CardSubtitle,
  [
    withClassName('card-subtitle'),
    withColor(),
    withSpacing()
  ]
);
