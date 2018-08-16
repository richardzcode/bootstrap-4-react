import React, { Component } from 'react';
import { JS } from 'fsts';

import { withClassName } from '../../utilities';
import { BLi } from '../dom';

class ListItem extends Component {
  render() {
    const p = JS.lessProps(this.props, 'inline');

    return <BLi {...p}>{this.props.children}</BLi>
  }
}

function listItemClassName(props) {
  const { inline } = props;
  return inline? 'list-inline-item' : '';
}

export default withClassName(listItemClassName)(ListItem);
