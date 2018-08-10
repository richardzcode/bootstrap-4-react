import React, { Component } from 'react';

import { withClassName } from '../../utilities';
import { BFigureCaption } from '../dom';

class FigureCaption extends Component {
  render() {
    return <BFigureCaption {...this.props}>{this.props.children}</BFigureCaption>
  }
}

export default withClassName('figure-caption')(FigureCaption);
