import React, { Component } from 'react';
import { JS } from 'fsts';

export function mergeClassName(props, className) {
  const cn = [].concat(props.className || [], className || []);
  return cn
    .filter(name => !!name.trim())
    .join(' ');
}

export function withClassName(name) {
  return function(Comp) {
    return class extends Component {
      render() {
        const { className } = this.props;
        const cn = [].concat(className || [], (typeof name === 'function'? name(this.props) : name));
        const p = JS.lessProps(this.props, 'className');

        return <Comp {...p} className={cn.join(' ')} />
      }
    }
  }
}
