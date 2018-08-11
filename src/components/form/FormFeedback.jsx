import React, { Component } from 'react';
import { JS } from 'fsts';

import { withClassName } from '../../utilities';
import { BDiv } from '../dom';

class FormFeedback extends Component {
  render() {
    const p = JS.lessProps(this.props, 'valid');

    return <BDiv {...p}>{this.props.children}</BDiv>
  }
}

function formFeedbackClassName(props) {
  const { valid } = props;
  return valid? 'valid-feedback' : 'invalid-feedback';
}

export default withClassName(formFeedbackClassName)(FormFeedback);
