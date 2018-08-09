import React, { Component } from 'react';

import { withClassName } from '../../utilities';
import { _Div } from '../dom';

class CardFooter extends Component {
  render() {
    return <_Div {...this.props}>{this.props.children}</_Div>
  }
}

export default withClassName('card-footer')(CardFooter);
