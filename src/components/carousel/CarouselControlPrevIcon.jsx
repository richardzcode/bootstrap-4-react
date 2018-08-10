import React, { Component } from 'react';

import { withClassName } from '../../utilities';
import { BSpan } from '../dom';

class CarouselControlPrevIcon extends Component {
  render() {
    return <BSpan {...this.props} aria-hidden="true">{this.props.children}</BSpan>
  }
}

export default withClassName('carousel-control-prev-icon')(CarouselControlPrevIcon);
