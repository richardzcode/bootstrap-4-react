import React, { Component } from 'react';
import { JS } from 'fsts';

import Input from './Input';

export default class Checkbox extends Component {
  render() {
    const p = JS.lessProps(this.props, 'type');
    return <Input {...p} type="checkbox">{this.props.children}</Input>
  }
}
