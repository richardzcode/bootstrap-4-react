import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, flatClassName } from './className';

export function withSizing() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { w, h, mw, mh } = this.props;
        const cn = mergeClassName(
          this.props,
          [
            w? 'w-' + w : '',
            h? 'h-' + h : '',
            mw? 'mw-' + mw : '',
            mh? 'mh-' + mh : ''
          ]
        );
        const p = JS.lessProps(this.props, ['className', 'w', 'h', 'mw', 'mh']);

        return cn
          ? <Comp {...p} className={cn}>{this.props.children}</Comp>
          : <Comp {...p}>{this.props.children}</Comp>
      }
    }
  }
}
