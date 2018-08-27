import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, withClassName } from '../../utilities';
import { BDiv } from '../dom';

class FormCheck extends Component {
  render() {
    const { inline } = this.props;
    const cn = mergeClassName(this.props, inline? 'form-check-inline' : '');
    const p = JS.lessProps(this.props, ['className', 'inline']);

    return <BDiv {...p} className={cn}>{this.props.children}</BDiv>
  }
}

export default withClassName('form-check')(FormCheck);
