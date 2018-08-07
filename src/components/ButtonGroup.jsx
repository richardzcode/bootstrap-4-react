import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, mergeClassName, withClassName } from '../utilities';

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

    return (
      <div
        role="group"
        className={cn}
        {...p}
      >
        {this.props.children}
      </div>
    )
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
