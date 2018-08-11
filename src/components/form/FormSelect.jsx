import React, { Component } from 'react';

import { stack, withClassName } from '../../utilities';
import { BSelect } from '../dom';
import { withSizing, withValidation } from './common';

class FormSelect extends Component {
  render() {
    return <BSelect {...this.props}>{this.props.children}</BSelect>
  }
}

export default stack(
  FormSelect,
  [
    withClassName('form-control'),
    withSizing(),
    withValidation()
  ]
);
