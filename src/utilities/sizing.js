import React, { Component } from 'react';
import { JS } from 'fsts';

function toClassName(props) {
  return ['w', 'h']
    .map(name => {
      return { name: name, value: props[name] }
    })
    .filter(pair => !!pair.value)
    .map(pair => pair.name + '-' + pair.value);
}

export function withSizing() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { className } = this.props;
        const p = JS.lessProps(this.props, ['className', 'w', 'h']);
        const cn = [].concat(
          className || [],
          toClassName(this.props)
        );

        return <Comp {...p} className={cn.join(' ')} />
      }
    }
  }
}
