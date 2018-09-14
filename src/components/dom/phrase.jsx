import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Em extends Component {
  render() {
    return <em {...this.props}>{this.props.children}</em>
  }
}

class Strong extends Component {
  render() {
    return <strong {...this.props}>{this.props.children}</strong>
  }
}

class Code extends Component {
  render() {
    return <code {...this.props}>{this.props.children}</code>
  }
}

class Samp extends Component {
  render() {
    return <samp {...this.props}>{this.props.children}</samp>
  }
}

class Kbd extends Component {
  render() {
    return <kbd {...this.props}>{this.props.children}</kbd>
  }
}

class Var extends Component {
  render() {
    return <var {...this.props}>{this.props.children}</var>
  }
}

const BEm = stack(Em, domStack);
const BStrong = stack(Strong, domStack);
const BCode = stack(Code, domStack);
const BSamp = stack(Samp, domStack);
const BKbd = stack(Kbd, domStack);
const BVar = stack(Var, domStack);

export {
  BEm,
  BStrong,
  BCode,
  BSamp,
  BKbd,
  BVar
}
