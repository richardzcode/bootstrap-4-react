import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, withClassName } from '../../utilities';
import { BDiv } from '../dom';

const breakpoints = [ 'xs', 'sm', 'md', 'lg', 'xl' ];

class Col extends Component {
  render() {
    const { xs, sm, md, lg, xl, order } = this.props;
    const cn = mergeClassName(
      this.props,
      [
        xs? 'col-xs-' + xs : '',
        sm? 'col-sm-' + sm : '',
        md? 'col-md-' + md : '',
        lg? 'col-lg-' + lg : '',
        xl? 'col-xl-' + xl : '',
        order? 'order-' + order : ''
      ]
    );
    const p = JS.lessProps(this.props, ['className', 'col', 'order'].concat(breakpoints));

    return <BDiv {...p}>{this.props.children}</BDiv>
  }
}

function colClassName(props) {
  const { col } = props;
  return col? 'col-' + col : 'col';
}

export default withClassName(colClassName)(Col);
