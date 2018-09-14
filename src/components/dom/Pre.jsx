import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, domStack, mergeClassName } from '../../utilities';

class Pre extends Component {
  render() {
    const { scrollable } = this.props;
    const cn = mergeClassName(
      this.props,
      scrollable? 'pre-scrollable' : ''
    );
    const p = JS.lessProps(this.props, ['className', 'scrollable']);

    return <pre className={cn} {...p}>{this.props.children}</pre>
  }
}

export default stack(Pre, domStack);
