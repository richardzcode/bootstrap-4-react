import React, { Component } from 'react';

import { withClassName } from '../../utilities';
import { _P } from '../dom';

class CardText extends Component {
  render() {
    return <_P {...this.props}>{this.props.children}</_P>
  }
}

export default withClassName('card-text')(CardText);
