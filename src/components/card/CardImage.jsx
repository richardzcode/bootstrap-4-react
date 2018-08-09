import React, { Component } from 'react';
import { JS } from 'fsts';

import { withClassName } from '../../utilities';

class CardImage extends Component {
  render() {
    const p = JS.lessProps(this.props, ['top', 'bottom']);

    return <img {...p} />
  }
}

function imageClassName(props) {
  const { top, bottom } = props;
  return top
    ? 'card-img-top'
    : (bottom? 'card-img-bottom' : 'card-img')
}

export default withClassName(imageClassName)(CardImage);
