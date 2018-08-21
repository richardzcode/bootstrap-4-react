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
    .map(pair => {
      return [].concat(pair.value).join(' ').split(' ')
        .map(item => pair.name + '-' + item)
        .join(' ');
    });
}

export function withSpacing() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { className } = this.props;
        const cn = [].concat(
          className || [],
          toClassName(this.props, 'm'),
          toClassName(this.props, 'p')
        ).join(' ');
        const p = JS.lessProps(this.props, ['className'].concat(propertyNames('m'), propertyNames('p')));

        return cn
          ? <Comp {...p} className={cn}>{this.props.children}</Comp>
          : <Comp {...p}>{this.props.children}</Comp>
      }
    }
  }
}
