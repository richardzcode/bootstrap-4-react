import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, flatClassName } from './className';

export function withShadow() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { shadow } = this.props;
        const cn = mergeClassName(this.props, flatClassName(shadow, 'shadow'));
        const p = JS.lessProps(this.props, ['className', 'shadow']);

        return cn
          ? <Comp {...p} className={cn}>{this.props.children}</Comp>
          : <Comp {...p}>{this.props.children}</Comp>
      }
    }
  }
}
