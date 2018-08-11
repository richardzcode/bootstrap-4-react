import React, { Component } from 'react';

import { stack, withClassName } from '../../utilities';
import { BInput } from '../dom';
import { withSizing, withValidation } from './common';

class FormFile extends Component {
  render() {
    return <BInput type="file" {...this.props}>{this.props.children}</BInput>
  }
}

export default stack(
  FormFile,
  [
    withClassName('form-control-file'),
    withSizing(),
    withValidation()
  ]
);
