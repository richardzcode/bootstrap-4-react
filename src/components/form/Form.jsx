import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, withClassName } from '../../utilities';
import { BForm } from '../dom';

class Form extends Component {
  render() {
    const { needsValidation } = this.props;
    const cn = mergeClassName(this.props, needsValidation? 'needs-validation' : '');
    const p = JS.lessProps(this.props, ['className', 'inline', 'needsValidation']);

    return <BForm {...p} className={cn}>{this.props.children}</BForm>
  }
}

function formClassName(props) {
  const { inline } = props;
  return inline? 'form-inline' : '';
}

export default withClassName(formClassName)(Form);
