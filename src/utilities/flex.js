import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, flatClassName } from './className';

export function withFlex() {
  return function(Comp) {
    return class extends Component {
      render() {
        const {
          flex,
          justifyContent,
          alignItems,
          alignContent,
          alignSelf,
          flexGrow,
          flexShrink,
          order
        } = this.props;
        const cn = mergeClassName(
          this.props,
          [
            flatClassName(flex, 'flex'),
            flatClassName(justifyContent, 'justify-content'),
            flatClassName(alignItems, 'align-items'),
            flatClassName(alignContent, 'align-content'),
            flatClassName(alignSelf, 'align-self'),
            flatClassName(flexGrow, 'flex-grow'),
            flatClassName(flexShrink, 'flex-shrink'),
            flatClassName(order, 'order')
          ]
        );
        const p = JS.lessProps(
          this.props,
          [
            'className',
            'flex',
            'justifyContent',
            'alignItems',
            'alignContent',
            'alignSelf',
            'flexGrow',
            'flexShrink',
            'order'
          ]
        );

        return cn
          ? <Comp {...p} className={cn}>{this.props.children}</Comp>
          : <Comp {...p}>{this.props.children}</Comp>
      }
    }
  }
}
