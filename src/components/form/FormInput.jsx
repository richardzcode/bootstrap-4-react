import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, withClassName } from '../../utilities';
import { BInput } from '../dom';
import { withSizing, withValidation } from './common';

class FormInput extends Component {
  render() {
    const { readonly } = this.props;
    const p = JS.lessProps(this.props, 'readonly');

    return readonly
        ? <BInput {...p} readOnly='readonly'>{this.props.children}</BInput>
        : <BInput {...p}>{this.props.children}</BInput>
  }
}

export default stack(
  FormInput,
  [
    withClassName('form-control'),
    withSizing(),
    withValidation()
  ]
);
