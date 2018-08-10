import React, { Component } from 'react';

import { withClassName } from '../../utilities';
import { BImg } from '../dom';

class FigureImage extends Component {
  render() {
    return <BImg {...this.props}>{this.props.children}</BImg>
  }
}

export default withClassName('figure-img')(FigureImage);
