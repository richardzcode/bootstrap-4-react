import React, { Component } from 'react';
import { JS } from 'fsts';

import { withClassName } from '../../utilities';
import { BA, BButton } from '../dom';

class DropdownItem extends Component {
  render() {
    const { as } = this.props;
    const p = JS.lessProps(this.props, 'as');

    return as === 'button'
      ? <BButton {...p}>{this.props.children}</BButton>
      : <BA {...p}>{this.props.children}</BA>
  }
}

export default withClassName('dropdown-item')(DropdownItem);
