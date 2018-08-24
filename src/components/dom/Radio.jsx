import React, { Component } from 'react';
import { JS } from 'fsts';

import Input from './Input';

export default class Radio extends Component {
  render() {
    const p = JS.lessProps(this.props, 'type');
    return <Input {...p} type="radio">{this.props.children}</Input>
  }
}
