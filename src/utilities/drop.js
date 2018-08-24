import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName } from './className';

export function withDrop() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { dropup, dropleft, dropright, dropdownToggle } = this.props;
        const cn = mergeClassName(
          this.props,
          [
            dropup? 'dropup' : '',
            dropleft? 'dropleft' : '',
            dropright? 'dropright' : '',
            dropdownToggle? 'dropdown-toggle' : ''
          ]
        );
        const p = JS.lessProps(
          this.props,
          [
            'className',
            'dropup',
            'dropleft',
            'dropright',
            'dropdownToggle'
          ]
        );

        return cn
          ? (
              dropdownToggle
              ? <Comp {...p} className={cn} data-toggle="dropdown">{this.props.children}</Comp>
              : <Comp {...p} className={cn}>{this.props.children}</Comp>
            )
          : <Comp {...p}>{this.props.children}</Comp>
      }
    }
  }
}
