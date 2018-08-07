import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName } from './common';
import { withPurpose } from '../utilities';

class Button extends Component {
  render() {
    const { size, block, active } = this.props;
    const cn = mergeClassName(
      this.props,
      [
        'btn',
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
      <button
        type="button"
        className={cn}
        {...p}
      >
        {this.props.children}
      </button>
    )
  }
}

export default withPurpose(Button, function(props) {
  const { outline } = props;
  return outline? 'btn-outline' : 'btn';
});
