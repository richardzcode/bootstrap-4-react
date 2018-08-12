import React, { Component } from 'react';

import { withClassName } from '../utilities';
import { BH1 } from './dom';

class Display extends Component {
  render() {
    return <BH1 {...this.props}>{this.props.children}</BH1>
  }
}

const Display1 =  withClassName('display-1')(Display);
const Display2 =  withClassName('display-2')(Display);
const Display3 =  withClassName('display-3')(Display);
const Display4 =  withClassName('display-4')(Display);

export {
  Display1,
  Display2,
  Display3,
  Display4
}
