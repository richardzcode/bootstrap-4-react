import React, { Component } from 'react';
import { JS } from 'fsts';

import { withClassName } from '../../utilities';
import { BA } from '../dom';

class CarouselControlPrev extends Component {
  render() {
    const p = JS.lessProps(this.props, 'role');
    return <BA {...p} role="button" data-slide="prev">{this.props.children}</BA>
  }
}

export default withClassName('carousel-control-prev')(CarouselControlPrev);
