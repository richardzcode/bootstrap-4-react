import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, flatClassName } from './className';

export function withAlign() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { className, align } = this.props;
        const cn = mergeClassName(
          this.props,
          flatClassName(align, 'align')
        );
        const p = JS.lessProps(this.props, ['className', 'align']);

        return cn
          ? <Comp {...p} className={cn}>{this.props.children}</Comp>
          : <Comp {...p}>{this.props.children}</Comp>
      }
    }
  }
}
