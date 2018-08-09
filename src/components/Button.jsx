import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, withClassName, mergeClassName, withPurpose } from '../utilities';
import { _Button } from './dom';

class Button extends Component {
  render() {
    const { size, block, active } = this.props;
    const cn = mergeClassName(
      this.props,
      [
        size? 'btn-' + size : '',
        block? 'btn-block' : '',
        active? 'active' : ''
      ]
    );
    const p = JS.lessProps(
      this.props,
      ['type', 'className', 'size', 'block', 'active', 'outline']
    );
    if (active) { p['aria-pressed'] = 'true' }

    return (
      <_Button
        type="button"
        className={cn}
        {...p}
      >
        {this.props.children}
      </_Button>
    )
  }
}

function purposePrefix(props) {
  const { outline } = props;
  return outline? 'btn-outline' : 'btn';
}

export default stack(
  Button,
  [
    withClassName('btn'),
    withPurpose(purposePrefix)
  ]
);
