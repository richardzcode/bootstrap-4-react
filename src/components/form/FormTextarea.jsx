import React, { Component } from 'react';

import { stack, withClassName } from '../../utilities';
import { BTextarea } from '../dom';
import { withSizing, withValidation } from './common';

class FormTextarea extends Component {
  render() {
    return <BTextarea {...this.props}>{this.props.children}</BTextarea>
  }
}

export default stack(
  FormTextarea,
  [
    withClassName('form-control'),
    withSizing(),
    withValidation()
  ]
);
