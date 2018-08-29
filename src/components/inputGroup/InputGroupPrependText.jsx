import React, { Component } from 'react';

import InputGroupPrepend from './InputGroupPrepend';
import InputGroupText from './InputGroupText';

export default class InputGroupPrependText extends Component {
  render() {
    return (
      <InputGroupPrepend>
        <InputGroupText {...this.props}>{this.props.children}</InputGroupText>
      </InputGroupPrepend>
    )
  }
}
