import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName } from './className';

export function withActive() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { active, disabled } = this.props;
        const cn = mergeClassName(
          this.props,
          [
            active? 'active' : '',
            disabled? 'disabled' : ''
          ]
        );
        const p = JS.lessProps(this.props, ['className', 'active', 'disabled']);

        return cn
          ? <Comp {...p} className={cn}>{this.props.children}</Comp>
          : <Comp {...p}>{this.props.children}</Comp>
      }
    }
  }
}
