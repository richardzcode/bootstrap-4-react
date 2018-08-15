import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName } from './className';

function flatWithPrefix(val, prefix) {
  return [].concat(val).join(' ').split(' ')
    .map(item => prefix + item)
    .join(' ');
}

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
            flex? flatWithPrefix(flex, 'flex-') : '',
            justifyContent? flatWithPrefix(justifyContent, 'justify-content-') : '',
            alignItems? flatWithPrefix(alignItems, 'align-items-') : '',
            alignContent? flatWithPrefix(alignContent, 'align-content-') : '',
            alignSelf? flatWithPrefix(alignSelf, 'align-self-') : '',
            flexGrow? flatWithPrefix(flexGrow, 'flex-grow-') : '',
            flexShrink? flatWithPrefix(flexShrink, 'flex-shrink-') : '',
            order? flatWithPrefix(order, 'order-') : ''
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

        return <Comp {...p} className={cn}>{this.props.children}</Comp>
      }
    }
  }
}
