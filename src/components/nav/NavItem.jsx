import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, withClassName } from '../../utilities';
import { BLi } from '../dom';

class NavItem extends Component {
  render() {
    const { dropdown } = this.props;
    const cn = mergeClassName(this.props, dropdown? 'dropdown' : '');
    const p = JS.lessProps(this.props, ['className', 'dropdown']);

    return <BLi {...p} className={cn}>{this.props.children}</BLi>
  }
}

export default withClassName('nav-item')(NavItem);
