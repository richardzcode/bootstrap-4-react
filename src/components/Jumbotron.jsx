import React, { Component } from 'react';
import { JS } from 'fsts';

import { mergeClassName, withClassName } from '../utilities';
import { BDiv } from './dom';

class Jumbotron extends Component {
  render() {
    const { fluid } = this.props;
    const cn = mergeClassName(this.props, fluid? 'jumbotron-fluid' : '');
    const p = JS.lessProps(this.props, ['className', 'fluid']);

    return <BDiv {...p} className={cn}>{this.props.children}</BDiv>
  }
}

export default withClassName('jumbotron')(Jumbotron);
