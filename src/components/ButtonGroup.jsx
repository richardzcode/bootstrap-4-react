import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, mergeClassName, withClassName, withDrop } from '../utilities';
import { BDiv } from './dom';

class ButtonGroup extends Component {
  render() {
    const { lg, sm } = this.props;
    const cn = mergeClassName(
      this.props,
      lg? 'btn-group-lg' : '',
      sm? 'btn-group-sm' : ''
    );
    const p = JS.lessProps(
      this.props,
      ['className', 'role', 'lg', 'sm', 'vertical']
    );

    return <BDiv role="group" className={cn} {...p}>{this.props.children}</BDiv>
  }
}

function groupClassName(props) {
  const { vertical } = props;
  return vertical? 'btn-group-vertical' : 'btn-group';
}

export default stack(
  ButtonGroup,
  [
    withClassName(groupClassName),
    withDrop()
  ]
);
