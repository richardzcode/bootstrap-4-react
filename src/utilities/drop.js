import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName } from './className';

export function withDrop() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { dropup, dropleft, dropright} = this.props;
        const cn = mergeClassName(
          this.props,
          [
            dropup? 'dropup' : '',
            dropleft? 'dropleft' : '',
            dropright? 'dropright' : ''
          ]
        );
        const p = JS.lessProps(this.props, ['className', 'dropup', 'dropleft', 'dropright']);

        return <Comp {...p} className={cn} />
      }
    }
  }
}
