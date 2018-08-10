import React, { Component } from 'react';
import { JS } from 'fsts';

const sides = [ 't', 'b', 'l', 'r', 'x', 'y', '' ];
const size = [ '0', '1', '2', '3', '4', '5', 'auto' ];

function propertyNames(prefix) {
  return sides.map(side => prefix + side);
}

function toClassName(props, prefix) {
  return propertyNames(prefix)
    .map(name => {
      return { name: name, value: props[name] }
    })
    .filter(pair => !!pair.value)
    .map(pair => pair.name + '-' + pair.value);
}

export function withSpacing() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { className } = this.props;
        const p = JS.lessProps(this.props, ['className'].concat(propertyNames('m'), propertyNames('p')));
        const cn = [].concat(
          className || [],
          toClassName(this.props, 'm'),
          toClassName(this.props, 'p')
        );

        return <Comp {...p} className={cn.join(' ')} />
      }
    }
  }
}