import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, flatClassName } from './className';

export function withEmbed() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { className, embed } = this.props;
        const cn = mergeClassName(
          this.props,
          [
            flatClassName(embed, 'embed-responsive'),
            embed? 'embed-responsive' : ''
          ]
        );
        const p = JS.lessProps(this.props, ['className', 'embed']);

        return cn
          ? <Comp {...p} className={cn}>{this.props.children}</Comp>
          : <Comp {...p}>{this.props.children}</Comp>
      }
    }
  }
}
