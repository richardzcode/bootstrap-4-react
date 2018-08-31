import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, flatClassName } from './className';

export function withPosition() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { className, position, fixed, sticky } = this.props;
        const cn = mergeClassName(
          this.props,
          [
            position? 'position-' + position : '',
            fixed? 'fixed-' + fixed : '',
            sticky? 'sticky-' + sticky : ''
          ]
        );
        const p = JS.lessProps(this.props, ['className', 'position', 'fixed', 'sticky']);

        return cn
          ? <Comp {...p} className={cn}>{this.props.children}</Comp>
          : <Comp {...p}>{this.props.children}</Comp>
      }
    }
  }
}
