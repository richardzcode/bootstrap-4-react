import React, { Component } from 'react';
import { JS } from 'fsts';

import { withClassName } from '../../utilities';
import { BSmall, BDiv } from '../dom';

class FormText extends Component {
  render() {
    const { as } = this.props;
    const p = JS.lessProps(this.props, 'as');

    return as === 'div'
      ? <BDiv {...p}>{this.props.children}</BDiv>
      : <BSmall {...p}>{this.props.children}</BSmall>
  }
}

export default withClassName('form-text')(FormText);
