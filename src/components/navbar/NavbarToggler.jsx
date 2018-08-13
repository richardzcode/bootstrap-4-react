import React, { Component } from 'react';
import { JS } from 'fsts';

import { withClassName } from '../../utilities';
import { BButton, BSpan } from '../dom';

class NavbarToggler extends Component {
  render() {
    const { target } = this.props;
    const p = JS.lessProps(this.props, 'target');

    return (
      <BButton {...p} data-toggle="collapse" data-target={target}>
        <BSpan className="navbar-toggler-icon"></BSpan>
        {this.props.children}
      </BButton>
    )
  }
}

export default withClassName('navbar-toggler')(NavbarToggler);
