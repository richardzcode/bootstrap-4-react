import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, withClassName } from '../../utilities';
import { BDiv } from '../dom';

class Modal extends Component {
  render() {
    const { fade } = this.props;
    const cn = mergeClassName(this.props, fade? 'fade' : '');
    const p = JS.lessProps(this.props, ['className', 'fade', 'tabIndex', 'role']);

    return <BDiv {...p} className={cn} tabIndex="-1" role="dialog">{this.props.children}</BDiv>
  }
}

export default withClassName('modal')(Modal);
