import React, { Component } from 'react';
import { JS } from 'fsts';

import { withClassName } from '../../utilities';
import { _Img } from '../dom';

class CardImage extends Component {
  render() {
    const p = JS.lessProps(this.props, ['top', 'bottom']);

    return <_Img {...p} />
  }
}

function imageClassName(props) {
  const { top, bottom } = props;
  return top
    ? 'card-img-top'
    : (bottom? 'card-img-bottom' : 'card-img')
}

export default withClassName(imageClassName)(CardImage);
