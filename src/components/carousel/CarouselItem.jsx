import React, { Component } from 'react';

import { stack, withClassName, withActive } from '../../utilities';
import { BDiv } from '../dom';

class CarouselItem extends Component {
  render() {
    return <BDiv {...this.props}>{this.props.children}</BDiv>
  }
}

export default stack(
  CarouselItem,
  [
    withClassName('carousel-item'),
    withActive()
  ]
);
