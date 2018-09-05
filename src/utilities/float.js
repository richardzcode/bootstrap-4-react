import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, flatClassName } from './className';

export function withFloat() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { float } = this.props;
        const cn = mergeClassName(this.props, flatClassName(float, 'float'));
        const p = JS.lessProps(this.props, ['className', 'float']);

        return cn
          ? <Comp {...p} className={cn}>{this.props.children}</Comp>
          : <Comp {...p}>{this.props.children}</Comp>
      }
    }
  }
}
