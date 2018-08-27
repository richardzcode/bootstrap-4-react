import React, { Component } from 'react';
import FormCheckInput from './FormCheckInput';

export default class FormRadio extends Component {
  render() {
    return <FormCheckInput type="radio" {...this.props}>{this.props.children}</FormCheckInput>
  }
}
