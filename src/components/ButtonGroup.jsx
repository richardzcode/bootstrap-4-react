import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, mergeClassName, withClassName, withDrop } from '../utilities';
import { BDiv } from './dom';

class ButtonGroup extends Component {
  render() {
    const { lg, sm, toggle } = this.props;
    const cn = mergeClassName(
      this.props,
      [
        lg? 'btn-group-lg' : '',
        sm? 'btn-group-sm' : '',
        toggle? 'btn-group-toggle' : ''
      ]
    );
    const p = JS.lessProps(
      this.props,
      ['className', 'role', 'lg', 'sm', 'vertical', 'toggle']
    );

    return toggle
      ? <BDiv role="group" className={cn} {...p} data-toggle="buttons">{this.props.children}</BDiv>
      : <BDiv role="group" className={cn} {...p}>{this.props.children}</BDiv>
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
