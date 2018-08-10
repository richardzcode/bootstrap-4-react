import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, withClassName } from '../../utilities';
import { BDiv } from '../dom';

class Carousel extends Component {
  render() {
    const { fade } = this.props;
    const cn = mergeClassName(this.props, fade? 'carousel-fade' : '');
    const p = JS.lessProps(this.props, ['className', 'fade']);

    return <BDiv className={cn} {...p} data-ride="carousel">{this.props.children}</BDiv>
  }
}

export default withClassName('carousel slide')(Carousel);
