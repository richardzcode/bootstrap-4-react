import React, { Component } from 'react';

import { withClassName } from '../utilities';
import { BP } from './dom';

class Lead extends Component {
  render() {
    return <BP {...this.props}>{this.props.children}</BP>
  }
}

export default withClassName('lead')(Lead);
