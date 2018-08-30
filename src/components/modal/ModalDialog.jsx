import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, withClassName } from '../../utilities';
import { BDiv } from '../dom';

class ModalDialog extends Component {
  render() {
    const { centered, lg, sm } = this.props;
    const cn = mergeClassName(
      this.props,
      [
        centered? 'modal-dialog-centered' : '',
        lg? 'modal-lg' : '',
        sm? 'modal-sm': ''
      ]
    );
    const p = JS.lessProps(this.props, ['className', 'centered', 'lg', 'sm', 'role']);

    return <BDiv {...p} className={cn} role="document">{this.props.children}</BDiv>
  }
}

export default withClassName('modal-dialog')(ModalDialog);
