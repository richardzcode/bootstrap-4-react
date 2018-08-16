import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName } from './className';

export function withShadow() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { shadow } = this.props;
        const cn = mergeClassName(this.props, shadow? 'shadow-' + shadow : '');
        const p = JS.lessProps(this.props, ['className', 'shadow']);

        return <Comp {...p} className={cn}>{this.props.children}</Comp>
      }
    }
  }
}
