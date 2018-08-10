import React, { Component } from 'react';

import { withClassName } from '../../utilities';
import { BFigure } from '../dom';

class Figure extends Component {
  render() {
    return <BFigure {...this.props}>{this.props.children}</BFigure>
  }
}

export default withClassName('figure')(Figure);
