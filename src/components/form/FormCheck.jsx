import React, { Component } from 'react';
import { JS } from 'fsts';

import { withClassName } from '../../utilities';
import { BDiv } from '../dom';

class FormCheck extends Component {
  render() {
    const p = JS.lessProps(this.props, 'inline');

    return <BDiv {...p}>{this.props.children}</BDiv>
  }
}

function formCheckClassName(props) {
  const { inline } = props;
  return inline? 'form-check-inline' : 'form-check';
}

export default withClassName(formCheckClassName)(FormCheck);
