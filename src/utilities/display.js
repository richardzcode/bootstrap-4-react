import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, flatClassName } from './className';

export function withDisplay() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { className, display, visible } = this.props;
        const cn = mergeClassName(
          this.props,
          [
            flatClassName(display, 'd'),
            typeof visible === 'boolean'? (visible? 'visible' : 'invisible') : ''
          ]
        );
        const p = JS.lessProps(this.props, ['className', 'display', 'visible']);

        return cn
          ? <Comp {...p} className={cn}>{this.props.children}</Comp>
          : <Comp {...p}>{this.props.children}</Comp>
      }
    }
  }
}
