import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, withClassName, mergeClassName, withPurpose } from '../utilities';
import { BButton, BA } from './dom';

class Button extends Component {
  render() {
    const { size, block, active, as } = this.props;
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
      ['className', 'size', 'block', 'outline', 'as']
    );
    if (active) { p['aria-pressed'] = 'true' }

    return (
      as && as === 'a'
      ? <BA role="button" className={cn} {...p}>{this.props.children}</BA>
      : <BButton className={cn} {...p}>{this.props.children}</BButton>
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
