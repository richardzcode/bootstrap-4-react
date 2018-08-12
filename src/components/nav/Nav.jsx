import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, withClassName } from '../../utilities';
import { BUl } from '../dom';

class Nav extends Component {
  render() {
    const { tabs, pills, fill, justified } = this.props;
    const cn = mergeClassName(
      this.props,
      [
        tabs? 'nav-tabs' : '',
        pills? 'nav-pills' : '',
        fill? 'nav-fill' : '',
        justified? 'nav-justified' : ''
      ]
    );
    const p = JS.lessProps(this.props, ['className', 'tabs', 'pills', 'fill', 'justified']);

    return <BUl {...p} className={cn}>{this.props.children}</BUl>
  }
}

export default withClassName('nav')(Nav);
