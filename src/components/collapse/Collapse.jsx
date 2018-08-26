import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, withClassName } from '../../utilities';
import { BDiv } from '../dom';

class Collapse extends Component {
  render() {
    const { navbar, show } = this.props;
    const cn = mergeClassName(
      this.props,
      [
        navbar? 'navbar-collapse' : '',
        show? 'show' : ''
      ]
    );
    const p = JS.lessProps(this.props, ['className', 'navbar', 'show']);

    return <BDiv {...p} className={cn}>{this.props.children}</BDiv>
  }
}

export default withClassName('collapse')(Collapse);
