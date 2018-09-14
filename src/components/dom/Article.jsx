import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Article extends Component {
  render() {
    return <article {...this.props}>{this.props.children}</article>
  }
}

export default stack(Article, domStack);
