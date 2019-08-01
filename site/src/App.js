import React, { Component, Fragment } from 'react';
import createHistory from 'history/createBrowserHistory';
import gtag from 'gtag-simplify';

import { Navigator, Main } from './modules';
import './App.css';

gtag.init('UA-125186092-1');

class App extends Component {
  constructor(props) {
    super(props);

    this.onLocation = this.onLocation.bind(this);

    this.history = createHistory();
    this.history.listen(this.onLocation);

    this.state = {
      path: '/'
    }
  }

  componentDidMount() {
    const location = this.history.location;
    this.onLocation(location);
  }

  onLocation(location) {
    const path = location.hash? location.hash.slice(1) : '/';
    gtag.updatePagePath(path);
    this.setState({ path: path });
  }

  render() {
    const { path } = this.state;
    return (
      <Fragment>
        <Navigator path={path} />
        <Main path={path} />
      </Fragment>
    );
  }
}

export default App;
