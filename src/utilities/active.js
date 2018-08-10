import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName } from './className';

export function withActive() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { active } = this.props;
        const cn = mergeClassName(this.props, active? 'active' : '');
        const p = JS.lessProps(this.props, ['className', 'active']);

        return <Comp {...p} className={cn} />
      }
    }
  }
}
