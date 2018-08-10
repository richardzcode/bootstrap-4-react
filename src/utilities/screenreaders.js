import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName } from './className';

export function withScreenreaders() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { srOnly } = this.props;
        const cn = mergeClassName(
          this.props,
          srOnly? ['sr-only', (srOnly === 'focusable'? 'sr-only-focusable' : '')] : ''
        );
        const p = JS.lessProps(this.props, ['className', 'active']);

        return <Comp {...p} className={cn} />
      }
    }
  }
}