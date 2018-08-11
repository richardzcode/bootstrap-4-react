import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, mergeClassName, withClassName } from '../../utilities';
import { BInput } from '../dom';
import { withSizing, withValidation } from './common';

class FormCheckInput extends Component {
  render() {
    const { noLabel } = this.props;
    const cn = mergeClassName(this.props, noLabel? 'position-static' : '');
    const p = JS.lessProps(this.props, ['className', 'noLabel']);

    return <BInput {...p} className={cn}>{this.props.children}</BInput>
  }
}

export default stack(
  FormCheckInput,
  [
    withClassName('form-check-input'),
    withSizing(),
    withValidation()
  ]
);
