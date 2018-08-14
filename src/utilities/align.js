import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName } from './className';

export function withAlign() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { className, align } = this.props;
        const cn = mergeClassName(
          this.props,
          [].concat(align).join(' ').split(' ')
            .filter(name => !!name)
            .map(name => 'align-' + name)
        );
        const p = JS.lessProps(this.props, ['className', 'align']);

        return <Comp {...p} className={cn}>{this.props.children}</Comp>
      }
    }
  }
}
