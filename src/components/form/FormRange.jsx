import React, { Component } from 'react';

import { stack, withClassName } from '../../utilities';
import { BInput } from '../dom';
import { withSizing, withValidation } from './common';

class FormRange extends Component {
  render() {
    return <BInput {...this.props} type="range">{this.props.children}</BInput>
  }
}

export default stack(
  FormRange,
  [
    withClassName('form-control-range'),
    withSizing(),
    withValidation()
  ]
);
