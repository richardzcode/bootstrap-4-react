import React, { Component } from 'react';

import { withClassName } from '../../utilities';
import { BLi } from '../dom';

class BreadcrumbItem extends Component {
  render() {
    return <BLi {...this.props}>{this.props.children}</BLi>
  }
}

export default withClassName('breadcrumb-item')(BreadcrumbItem);
