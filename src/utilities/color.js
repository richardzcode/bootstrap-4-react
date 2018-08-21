import React, { Component } from 'react';
import { JS } from 'fsts';

import { purposes } from './purpose';

const textColors = ['white', 'muted'].concat(purposes);
const bgColors = ['white'].concat(purposes);

function toClassName(prop, val) {
  if (!val) { return []; }

  return [].concat(val).join(' ').split(' ')
    // do not filter so handles text utilities as well
    //.filter(item => (prop === 'text'? textColors : bgColors).includes(item))
    .map(item => prop + '-' + item);
}

export function withColor() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { className, text, bg } = this.props;
        const cn = [].concat(
          className || [],
          toClassName('text', text),
          toClassName('bg', bg)
        ).join(' ');
        const p = JS.lessProps(this.props, ['className', 'text', 'bg']);

        return cn
          ? <Comp {...p} className={cn}>{this.props.children}</Comp>
          : <Comp {...p}>{this.props.children}</Comp>
      }
    }
  }
}
