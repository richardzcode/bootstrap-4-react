import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class H1 extends Component {
  render() {
    return <h1 {...this.props}>{this.props.children}</h1>
  }
}

class H2 extends Component {
  render() {
    return <h2 {...this.props}>{this.props.children}</h2>
  }
}

class H3 extends Component {
  render() {
    return <h3 {...this.props}>{this.props.children}</h3>
  }
}

class H4 extends Component {
  render() {
    return <h4 {...this.props}>{this.props.children}</h4>
  }
}

class H5 extends Component {
  render() {
    return <h5 {...this.props}>{this.props.children}</h5>
  }
}

class H6 extends Component {
  render() {
    return <h6 {...this.props}>{this.props.children}</h6>
  }
}

const BH1 = stack(H1, domStack);
const BH2 = stack(H2, domStack);
const BH3 = stack(H3, domStack);
const BH4 = stack(H4, domStack);
const BH5 = stack(H5, domStack);
const BH6 = stack(H6, domStack);

export {
  BH1,
  BH2,
  BH3,
  BH4,
  BH5,
  BH6
}
