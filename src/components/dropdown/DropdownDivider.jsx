import React, { Component } from 'react';

import { withClassName } from '../../utilities';
import { BDiv } from '../dom';

class DropdownDivider extends Component {
  render() {
    return <BDiv {...this.props}>{this.props.children}</BDiv>
  }
}

export default withClassName('dropdown-divider')(DropdownDivider);
