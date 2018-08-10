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
        const p = JS.lessProps(this.props, ['className', 'text', 'bg']);
        const cn = [].concat(
          className || [],
          toClassName('text', text),
          toClassName('bg', bg)
        );

        return <Comp {...p} className={cn.join(' ')} />
      }
    }
  }
}
