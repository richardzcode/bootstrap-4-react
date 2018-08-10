import React, { Component } from 'react';
import { JS } from 'fsts';

import { domStack } from './common';
import { mergeClassName } from '../../utilities';

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

export default domStack(Img);
