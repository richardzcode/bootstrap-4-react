import React, { Component } from 'react';
import { JS } from 'fsts';

import { purposes } from './purpose';

const borderColors = ['white'].concat(purposes);

function borderClassName(val) {
  if (!val) { return []; }
  if (typeof val === 'boolean') { return ['border']; }

  const items = [].concat(val).join(' ').split(' ');

  let hasColor = false;
  let hasBorder = false;
  items.forEach(item => {
    if (item === 'true') { hasBorder = true; }
    if (borderColors.includes(item)) { hasColor = true; }
  });
  if (hasColor && !hasBorder) { items.push('true'); }

  return items
    .map(item => (item === 'true')? 'border' : 'border-' + item);
}

function roundedClassName(val) {
  if (!val) { return []; }
  if (typeof val === 'boolean') { return ['rounded']; }

  return [].concat(val).join(' ').split(' ')
    .map(item => (item === 'true')? 'rounded' : 'rounded-' + item);
}

export function withBorder() {
  return function(Comp) {
    return class extends Component {
      render() {
        const { className, border, rounded } = this.props;
        const cn = [].concat(
          className || [],
          borderClassName(border),
          roundedClassName(rounded)
        ).join(' ');
        const p = JS.lessProps(this.props, ['className', 'border', 'rounded']);

        return cn
          ? <Comp {...p} className={cn}>{this.props.children}</Comp>
          : <Comp {...p}>{this.props.children}</Comp>
      }
    }
  }
}
