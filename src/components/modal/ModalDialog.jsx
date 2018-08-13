import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, withClassName } from '../../utilities';
import { BDiv } from '../dom';

class ModalDialog extends Component {
  render() {
    const { centered } = this.props;
    const cn = mergeClassName(this.props, centered? 'modal-dialog-centered' : '');
    const p = JS.lessProps(this.props, ['className', 'centered', 'role']);

    return <BDiv {...p} className={cn} role="document">{this.props.children}</BDiv>
  }
}

export default withClassName('modal-dialog')(ModalDialog);
