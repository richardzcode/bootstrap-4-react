import React, { Component } from 'react';
import { JS } from 'fsts';

export function mergeClassName(props, className) {
  const cn = [].concat(className || [], props.className || []);
  return cn
    .filter(name => !!name.trim())
    .join(' ');
}

export function flatClassName(name, prefix) {
  if (name === true) { return prefix; }
  if (!name || !name.trim()) { return ''; }
  return [].concat(name).join(' ').split(' ')
    .map(item => prefix? prefix + '-' + item : item)
    .join(' ');
}

export function withClassName(name) {
  return function(Comp) {
    return class extends Component {
      render() {
        const { className } = this.props;
        const cn = [].concat(
          (typeof name === 'function'? name(this.props) : name),
          className || []
        ).join(' ');
        const p = JS.lessProps(this.props, 'className');

        return cn
          ? <Comp {...p} className={cn}>{this.props.children}</Comp>
          : <Comp {...p}>{this.props.children}</Comp>
      }
    }
  }
}
