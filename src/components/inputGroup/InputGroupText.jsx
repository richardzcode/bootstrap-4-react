import React, { Component } from 'react';

import { withClassName } from '../../utilities';
import { BSpan } from '../dom';

class InputGroupText extends Component {
  render() {
    return <BSpan {...this.props}>{this.props.children}</BSpan>
  }
}

export default withClassName('input-group-text')(InputGroupText);
