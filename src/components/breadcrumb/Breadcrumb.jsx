import React, { Component } from 'react';
import { JS } from 'fsts';

import { withClassName } from '../../utilities';
import { BOl } from '../dom';

class Breadcrumb extends Component {
  render() {
    return <BOl {...this.props}>{this.props.children}</BOl>
  }
}

export default withClassName('breadcrumb')(Breadcrumb);
