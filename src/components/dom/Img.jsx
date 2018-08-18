import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, domStack, mergeClassName } from '../../utilities';

class Img extends Component {
  render() {
    const { fluid, thumbnail } = this.props;
    const cn = mergeClassName(
      this.props,
      [
        fluid? 'img-fluid' : '',
        thumbnail? 'img-thumbnail' : ''
      ]
    );
    const p = JS.lessProps(this.props, ['className', 'fluid', 'thumbnail']);

    return <img className={cn} {...p}>{this.props.children}</img>
  }
}

export default stack(Img, domStack);
