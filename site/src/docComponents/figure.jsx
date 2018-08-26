import React, { Component } from 'react';
import { Figure } from 'bootstrap-4-react';

const img_src = 'data:image/svg+xml;charset=UTF-8,' +
  '<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"286"%20height%3D"180"%20viewBox%3D"0%200%20286%20180"%20preserveAspectRatio%3D"none">' +
  '<g%20fill%3D"rgba(255%2C255%2C255%2C.75)"%20font-family%3D"Helvetica%2C%20monospace"%20font-size%3D"14pt">' +
  '<rect%20width%3D"286"%20height%3D"180"%20fill%3D"#777"%2F>' +
  '<g><text%20x%3D"99.4296875"%20y%3D"96.6">286X180<%2Ftext><%2Fg>' +
  '<%2Fg><%2Fsvg>';

export default class App extends Component {
  render() {
    return (
      <Figure>
        <Figure.Image src={img_src}/>
        <Figure.Caption>A caption for above image</Figure.Caption>
      </Figure>
    )
  }
}
