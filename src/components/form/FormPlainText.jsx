import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, withClassName } from '../../utilities';
import { BInput } from '../dom';
import { withSizing, withValidation } from './common';

class FormPlainText extends Component {
  render() {
    const { readonly } = this.props;
    const p = JS.lessProps(this.props, 'readonly');

    return <BInput {...p} type="text" readOnly='readonly'>{this.props.children}</BInput>
  }
}

export default stack(
  FormPlainText,
  [
    withClassName('form-control-plaintext'),
    withSizing(),
    withValidation()
  ]
);
