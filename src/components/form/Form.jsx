import React, { Component } from 'react';
import { JS } from 'fsts';

import { withClassName } from '../../utilities';
import { BForm } from '../dom';

class Form extends Component {
  render() {
    const p = JS.lessProps(this.props, 'inline');

    return <BForm {...p}>{this.props.children}</BForm>
  }
}

function formClassName(props) {
  const { inline } = props;
  return inline? 'form-inline' : '';
}

export default withClassName(formClassName)(Form);
