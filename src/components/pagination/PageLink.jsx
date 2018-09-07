import React, { Component } from 'react';
import { JS } from 'fsts';

import { withClassName } from '../../utilities';
import { BA, BSpan } from '../dom';

class PageLink extends Component {
  render() {
    const { as } = this.props;
    const p = JS.lessProps(this.props, 'as');

    return as === 'span'
      ? <BSpan {...p}>{this.props.children}</BSpan>
      : <BA {...p}>{this.props.children}</BA>
  }
}

export default withClassName('page-link')(PageLink);
