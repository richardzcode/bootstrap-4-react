import React, { Component } from 'react';
import { JS } from 'fsts';

import { withClassName } from '../../utilities';
import { BLi } from '../dom';

class CarouselIndicator extends Component {
  render() {
    const { target, to } = this.props;
    const p = JS.lessProps(this.props, ['target', 'to']);

    return <BLi data-target={target} data-slide-to={to} {...p}>{this.props.children}</BLi>
  }
}

export default CarouselIndicator;
