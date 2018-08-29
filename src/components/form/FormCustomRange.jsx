import React, { Component } from 'react';

import { stack, withClassName } from '../../utilities';
import { BInput } from '../dom';
import { withSizing, withValidation } from './common';

class FormCustomRange extends Component {
  render() {
    return <BInput {...this.props} type="range">{this.props.children}</BInput>
  }
}

export default stack(
  FormCustomRange,
  [
    withClassName('custom-range'),
    withSizing(),
    withValidation()
  ]
);
