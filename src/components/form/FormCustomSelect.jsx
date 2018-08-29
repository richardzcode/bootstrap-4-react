import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, mergeClassName, withClassName } from '../../utilities';
import { BSelect } from '../dom';
import { withSizing, withValidation } from './common';

class FormCustomSelect extends Component {
  render() {
    const { lg, sm } = this.props;
    const cn = mergeClassName(
      this.props,
      [
        lg? 'custom-select-lg' : '',
        sm? 'custom-select-sm' : ''
      ]
    );
    const p = JS.lessProps(this.props, ['lg', 'sm']);

    return <BSelect {...p} className={cn}>{this.props.children}</BSelect>
  }
}

export default stack(
  FormCustomSelect,
  [
    withClassName('custom-select'),
    withSizing(),
    withValidation()
  ]
);
