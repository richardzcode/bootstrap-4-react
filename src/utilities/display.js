import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName } from './className';

export function withDisplay() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { className, display, visible } = this.props;
        const cn = mergeClassName(
          this.props,
          [].concat(display).join(' ').split(' ')
            .filter(name => !!name)
            .map(name => 'd-' + name)
            .concat(typeof visible === 'boolean'? (visible? 'visible' : 'invisible') : [])
        );
console.log('cn and display', cn, display);
        const p = JS.lessProps(this.props, ['className', 'display', 'visible']);

        return <Comp {...p} className={cn} />
      }
    }
  }
}
