import React, { Component } from 'react';
import FormCheckInput from './FormCheckInput';

export default class FormCheckbox extends Component {
  render() {
    return <FormCheckInput type="checkbox" {...this.props}>{this.props.children}</FormCheckInput>
  }
}
