import React, { Component } from 'react';

import { withClassName } from '../../utilities';
import { BDiv } from '../dom';

class CardBody extends Component {
  render() {
    return <BDiv {...this.props}>{this.props.children}</BDiv>
  }
}

export default withClassName('card-body')(CardBody);
