import React, { Component } from 'react';

import PageItem from './PageItem';
import PageLink from './PageLink';

export default class PageItemLink extends Component {
  render() {
    return (
      <PageItem>
        <PageLink {...this.props}>{this.props.children}</PageLink>
      </PageItem>
    )
  }
}
