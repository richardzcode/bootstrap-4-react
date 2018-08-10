import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName } from './className';

export function withDisplay() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { className, display } = this.props;
        const p = JS.lessProps(this.props, ['className', 'display']);
        const cn = mergeClassName(
          this.props,
          [].concat(display).join(' ').split(' ').filter(name => !!name).map(name => 'd-' + name)
        );

        return <Comp {...p} className={cn} />
      }
    }
  }
}
