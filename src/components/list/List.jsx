import React, { Component } from 'react';
import { JS } from 'fsts';

import { withClassName } from '../../utilities';
import { BUl } from '../dom';

class List extends Component {
  render() {
    const p = JS.lessProps(this.props, ['unstyled', 'inline']);

    return <BUl {...p}>{this.props.children}</BUl>
  }
}

function listClassName(props) {
  const { unstyled, inline } = props;
  return [
    unstyled? 'list-unstyled' : '',
    inline? 'list-inline' : ''
  ].join(' ');
}

export default withClassName(listClassName)(List);
