import React, { Component } from 'react';

import { withClassName } from '../../utilities';
import { BOl } from '../dom';

class CarouselIndicators extends Component {
  render() {
    return <BOl {...this.props}>{this.props.children}</BOl>
  }
}

export default withClassName('carousel-indicators')(CarouselIndicators);
