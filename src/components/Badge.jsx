import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, mergeClassName, withClassName, withPurpose } from '../utilities';
import { BSpan } from './dom';

class Badge extends Component {
  render() {
    const { pill } = this.props;
    const cn = mergeClassName(this.props, pill? 'badge-pill' : '');
    const p = JS.lessProps(this.props, ['className', 'pill']);

    return (
      <BSpan {...p} className={cn}>{this.props.children}</BSpan>
    )
  }
}

export default stack(
  Badge,
  [
    withClassName('badge'),
    withPurpose('badge')
  ]
);
