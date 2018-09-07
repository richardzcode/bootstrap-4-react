import React, { Component } from 'react';

import { withClassName } from '../../utilities';
import { BDiv } from '../dom';

class Progress extends Component {
  render() {
    return <BDiv {...this.props}>{this.props.children}</BDiv>
  }
}

export default withClassName('progress')(Progress);
