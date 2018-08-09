import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, mergeClassName, withClassName } from '../utilities';
import { _Div } from './dom';

class ButtonGroup extends Component {
  render() {
    const { size } = this.props;
    const cn = mergeClassName(
      this.props,
      size? 'btn-group-' + size : ''
    );
    const p = JS.lessProps(
      this.props,
      ['className', 'role', 'size', 'vertical']
    );

    return <_Div role="group" className={cn} {...p}>{this.props.children}</_Div>
  }
}

function groupClassName(props) {
  const { vertical } = props;
  return vertical? 'btn-group-vertical' : 'btn-group';
}

export default stack(
  ButtonGroup,
  [
    withClassName(groupClassName)
  ]
);
