import React, { Component } from 'react';

import InputGroupAppend from './InputGroupAppend';
import InputGroupText from './InputGroupText';

export default class InputGroupAppendText extends Component {
  render() {
    return (
      <InputGroupAppend>
        <InputGroupText {...this.props}>{this.props.children}</InputGroupText>
      </InputGroupAppend>
    )
  }
}
