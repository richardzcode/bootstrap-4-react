import React, { Component } from 'react';

import { withClassName } from '../../utilities';
import { BH5 } from '../dom';

class ModalTitle extends Component {
  render() {
    return <BH5 {...this.props}>{this.props.children}</BH5>
  }
}

export default withClassName('modal-title')(ModalTitle);
