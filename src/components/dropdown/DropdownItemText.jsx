import React, { Component } from 'react';

import { withClassName } from '../../utilities';
import { BSpan } from '../dom';

class DropdownItemText extends Component {
  render() {
    return <BSpan {...this.props}>{this.props.children}</BSpan>
  }
}

export default withClassName('dropdown-item-text')(DropdownItemText);
