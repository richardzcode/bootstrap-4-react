import React, { Component } from 'react';
import { JS } from 'fsts';

import { withClassName } from '../../utilities';
import { BDiv } from '../dom';

class FormFeedback extends Component {
  render() {
    const p = JS.lessProps(this.props, 'invalid');

    return <BDiv {...p}>{this.props.children}</BDiv>
  }
}

function formFeedbackClassName(props) {
  const { invalid } = props;
  return invalid? 'invalid-feedback' : 'valid-feedback';
}

export default withClassName(formFeedbackClassName)(FormFeedback);
