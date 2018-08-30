import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, withClassName } from '../../utilities';
import { BDiv } from '../dom';

class TabPane extends Component {
  render() {
    const { fade, show } = this.props;
    const cn = mergeClassName(
      this.props,
      [
        fade? 'fade' : '',
        show? 'show' : ''
      ]
    );
    const p = JS.lessProps(this.props, ['className', 'fade', 'show', 'role']);

    return <BDiv {...p} className={cn} role="tabpanel">{this.props.children}</BDiv>
  }
}

export default withClassName('tab-pane')(TabPane);
