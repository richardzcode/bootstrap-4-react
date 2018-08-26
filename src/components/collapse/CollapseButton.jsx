import React, { Component } from 'react';
import { JS } from 'fsts';

import Button from '../Button';

class CollapseButton extends Component {
  render() {
    const { target, as } = this.props;
    const p = JS.lessProps(this.props, 'target');

    if (!target) {
      return <Button {...p} data-toggle="collapse">{this.props.children}</Button>
    }

    return as === 'a'
      ? <Button {...p} data-toggle="collapse" href={target}>{this.props.children}</Button>
      : <Button {...p} data-toggle="collapse" data-target={target}>{this.props.children}</Button>
  }
}

export default CollapseButton;
