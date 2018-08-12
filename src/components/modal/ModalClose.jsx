import React, { Component } from 'react';
import { JS } from 'fsts';

import { withClassName } from '../../utilities';
import { BButton } from '../dom';

class ModalClose extends Component {
  render() {
    const p = JS.lessProps(this.props, 'type');

    return <BButton {...p} type="button" data-dismiss="modal" aria-label="Close">{this.props.children}</BButton>
  }
}

export default withClassName('close')(ModalClose);
