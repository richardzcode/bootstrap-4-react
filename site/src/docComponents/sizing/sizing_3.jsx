import React, { Component } from 'react';
import { BImg } from 'bootstrap-4-react';

const img_src = 'data:image/svg+xml;charset=UTF-8,<svg%20width%3D"655"%20height%3D"100"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20viewBox%3D"0%200%20655%20100"%20preserveAspectRatio%3D"none"><defs><style%20type%3D"text%2Fcss">%23holder_165b004bb6c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A33pt%20%7D%20<%2Fstyle><%2Fdefs><g%20id%3D"holder_165b004bb6c"><rect%20width%3D"655"%20height%3D"100"%20fill%3D"%23777"><%2Frect><g><text%20x%3D"145.9140625"%20y%3D"65.15">Max-width%20%3D%20100%25<%2Ftext><%2Fg><%2Fg><%2Fsvg>'

export default class App extends Component {
  render() {
    return (
      <BImg mw="100" src={img_src} />
    )
  }
}
