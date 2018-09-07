import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, withClassName } from '../../utilities';
import { BDiv } from '../dom';

class ProgressBar extends Component {
  render() {
    const { striped, animated, min, max, now } = this.props;
    const cn = mergeClassName(
      this.props,
      [
        striped? 'progress-bar-striped' : '',
        animated? 'progress-bar-animated' : ''
      ]
    );
    const p = JS.lessProps(
      this.props,
      [
        'className',
        'role',
        'striped',
        'animated',
        'min',
        'max',
        'now'
      ]
    );

    if (min !== undefined && !p['aria-valuemin']) { p['aria-valuemin'] = min; }
    if (max !== undefined && !p['aria-valuemax']) { p['aria-valuemax'] = max; }
    if (now !== undefined && !p['aria-valuenow']) { p['aria-valuenow'] = now; }

    if (JS.isNumber(min) && JS.isNumber(max) && JS.isNumber(now)) {
      const width = (now - min) / (max - min);
      if (width > 0) {
        const style = p.style || {};
        if (!style.width) { style.width = (width * 100) + '%' }
        if (!p.style) { p.style = style; }
      }
    }

    return <BDiv {...p} className={cn} role="progressbar">{this.props.children}</BDiv>
  }
}

export default withClassName('progress-bar')(ProgressBar);
