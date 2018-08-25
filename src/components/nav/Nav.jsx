import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, withClassName } from '../../utilities';
import { BUl } from '../dom';

class Nav extends Component {
  render() {
    const { tabs, pills, fill, justified, cardHeaderTabs, cardHeaderPills } = this.props;
    const cn = mergeClassName(
      this.props,
      [
        tabs? 'nav-tabs' : '',
        pills? 'nav-pills' : '',
        fill? 'nav-fill' : '',
        justified? 'nav-justified' : '',
        cardHeaderTabs? 'nav-tabs card-header-tabs' : '',
        cardHeaderPills? 'nav-pills card-header-pills' : ''
      ]
    );
    const p = JS.lessProps(
      this.props,
      [
        'className',
        'tabs',
        'pills',
        'fill',
        'justified',
        'cardHeaderTabs',
        'cardHeaderPills'
      ]
    );

    return cn
      ? <BUl {...p} className={cn}>{this.props.children}</BUl>
      : <BUl {...p}>{this.props.children}</BUl>
  }
}

export default withClassName('nav')(Nav);
