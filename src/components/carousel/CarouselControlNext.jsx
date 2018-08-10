import React, { Component } from 'react';
import { JS } from 'fsts';

import { withClassName } from '../../utilities';
import { BA } from '../dom';

class CarouselControlNext extends Component {
  render() {
    const p = JS.lessProps(this.props, 'role');
    return <BA {...p} role="button" data-slide="next">{this.props.children}</BA>
  }
}

export default withClassName('carousel-control-next')(CarouselControlNext);
