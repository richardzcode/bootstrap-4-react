import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName } from './className.js';

export function withFont() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { font, fontWeight } = this.props;
        const cn = mergeClassName(
          this.props,
          [
            font? 'font-' + font : '',
            fontWeight? 'font-weight-' + fontWeight : ''
          ]
        );
        const p = JS.lessProps(this.props, ['className', 'font', 'fontWeight']);

        return <Comp {...p} className={cn}>{this.props.children}</Comp>
      }
    }
  }
}
