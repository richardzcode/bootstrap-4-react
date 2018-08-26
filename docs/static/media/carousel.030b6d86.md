## Carousel

A slideshow component for cycling through elements—images or slides of text—like a carousel.

```
renderComp: carousel_1
import React, { Component } from 'react';
import Bootstrap, { Carousel, BImg } from 'bootstrap-4-react';

const first_src = 'data:image/svg+xml;charset=UTF-8,' +
  '<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"286"%20height%3D"180"%20viewBox%3D"0%200%20286%20180"%20preserveAspectRatio%3D"none">' +
  '<g%20fill%3D"rgba(255%2C255%2C255%2C.75)"%20font-family%3D"Helvetica%2C%20monospace"%20font-size%3D"14pt">' +
  '<rect%20width%3D"286"%20height%3D"180"%20fill%3D"#777"%2F>' +
  '<g><text%20x%3D"99.4296875"%20y%3D"96.6">First slide<%2Ftext><%2Fg>' +
  '<%2Fg><%2Fsvg>';

const second_src = first_src.replace('First', 'Second');
const third_src = first_src.replace('First', 'Third');

export default class App extends Component {
  // A workaround since documentation pages are server-side-rendered
  // In most projects can be:
  // componentDidMount() {
  //   Bootstrap.carousel();
  // }
  componentWillMount() {
    window.setTimeout(() => Bootstrap.carousel(), 2000);
  }

  render() {
    return (
      <Carousel w="100" id="carouselExample">
        <Carousel.Inner>
          <Carousel.Item active><BImg display="block" w="100" src={first_src} /></Carousel.Item>
          <Carousel.Item><BImg display="block" w="100" src={second_src} /></Carousel.Item>
          <Carousel.Item><BImg display="block" w="100" src={third_src} /></Carousel.Item>
        </Carousel.Inner>
      </Carousel>
    )
  }
}
```

### With controls

Adding in the previous and next controls

```
renderComp: carousel_2
import React, { Component } from 'react';
import Bootstrap, { Carousel, BImg } from 'bootstrap-4-react';

const first_src = 'data:image/svg+xml;charset=UTF-8,' +
  '<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"286"%20height%3D"180"%20viewBox%3D"0%200%20286%20180"%20preserveAspectRatio%3D"none">' +
  '<g%20fill%3D"rgba(255%2C255%2C255%2C.75)"%20font-family%3D"Helvetica%2C%20monospace"%20font-size%3D"14pt">' +
  '<rect%20width%3D"286"%20height%3D"180"%20fill%3D"#777"%2F>' +
  '<g><text%20x%3D"99.4296875"%20y%3D"96.6">First slide<%2Ftext><%2Fg>' +
  '<%2Fg><%2Fsvg>';

const second_src = first_src.replace('First', 'Second');
const third_src = first_src.replace('First', 'Third');

export default class App extends Component {
  // A workaround since documentation pages are server-side-rendered
  // In most projects can be:
  // componentDidMount() {
  //   Bootstrap.carousel();
  // }
  componentWillMount() {
    window.setTimeout(() => Bootstrap.carousel('#carouselExampleControls'), 2000);
  }

  render() {
    return (
      <Carousel w="100" id="carouselExampleControls">
        <Carousel.Inner>
          <Carousel.Item active><BImg display="block" w="100" src={first_src} /></Carousel.Item>
          <Carousel.Item><BImg display="block" w="100" src={second_src} /></Carousel.Item>
          <Carousel.Item><BImg display="block" w="100" src={third_src} /></Carousel.Item>
        </Carousel.Inner>
        <Carousel.Prev href="#carouselExampleControls">
          <Carousel.Prev.Icon />
        </Carousel.Prev>
        <Carousel.Next href="#carouselExampleControls">
          <Carousel.Next.Icon />
        </Carousel.Next>
      </Carousel>
    )
  }
}
```

### With indicators

You can also add the indicators to the carousel, alongside the controls, too.

```
renderComp: carousel_3
import React, { Component } from 'react';
import Bootstrap, { Carousel, BImg } from 'bootstrap-4-react';

const first_src = 'data:image/svg+xml;charset=UTF-8,' +
  '<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"286"%20height%3D"180"%20viewBox%3D"0%200%20286%20180"%20preserveAspectRatio%3D"none">' +
  '<g%20fill%3D"rgba(255%2C255%2C255%2C.75)"%20font-family%3D"Helvetica%2C%20monospace"%20font-size%3D"14pt">' +
  '<rect%20width%3D"286"%20height%3D"180"%20fill%3D"#777"%2F>' +
  '<g><text%20x%3D"99.4296875"%20y%3D"96.6">First slide<%2Ftext><%2Fg>' +
  '<%2Fg><%2Fsvg>';

const second_src = first_src.replace('First', 'Second');
const third_src = first_src.replace('First', 'Third');

export default class App extends Component {
  // A workaround since documentation pages are server-side-rendered
  // In most projects can be:
  // componentDidMount() {
  //   Bootstrap.carousel();
  // }
  componentWillMount() {
    window.setTimeout(() => Bootstrap.carousel('#carouselExampleIndicators'), 2000);
  }

  render() {
    return (
      <Carousel w="100" id="carouselExampleIndicators">
        <Carousel.Indicators>
          <Carousel.Indicator target="#carouselExampleIndicators" to="0" active />
          <Carousel.Indicator target="#carouselExampleIndicators" to="1" />
          <Carousel.Indicator target="#carouselExampleIndicators" to="2" />
        </Carousel.Indicators>
        <Carousel.Inner>
          <Carousel.Item active><BImg display="block" w="100" src={first_src} /></Carousel.Item>
          <Carousel.Item><BImg display="block" w="100" src={second_src} /></Carousel.Item>
          <Carousel.Item><BImg display="block" w="100" src={third_src} /></Carousel.Item>
        </Carousel.Inner>
        <Carousel.Prev href="#carouselExampleIndicators">
          <Carousel.Prev.Icon />
        </Carousel.Prev>
        <Carousel.Next href="#carouselExampleIndicators">
          <Carousel.Next.Icon />
        </Carousel.Next>
      </Carousel>
    )
  }
}
```

### With captions

Adding captions to your slides easily with`<Carousel.Caption>` within `<Carousel.Item>`. They can be easily hidden on smaller viewports, with optional display utilities.

```
renderComp: carousel_4
import React, { Component } from 'react';
import Bootstrap, { Carousel, BImg } from 'bootstrap-4-react';

const first_src = 'data:image/svg+xml;charset=UTF-8,' +
  '<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"286"%20height%3D"180"%20viewBox%3D"0%200%20286%20180"%20preserveAspectRatio%3D"none">' +
  '<g%20fill%3D"rgba(255%2C255%2C255%2C.75)"%20font-family%3D"Helvetica%2C%20monospace"%20font-size%3D"14pt">' +
  '<rect%20width%3D"286"%20height%3D"180"%20fill%3D"#777"%2F>' +
  '<g><text%20x%3D"99.4296875"%20y%3D"96.6">First slide<%2Ftext><%2Fg>' +
  '<%2Fg><%2Fsvg>';

const second_src = first_src.replace('First', 'Second');
const third_src = first_src.replace('First', 'Third');

export default class App extends Component {
  // A workaround since documentation pages are server-side-rendered
  // In most projects can be:
  // componentDidMount() {
  //   Bootstrap.carousel();
  // }
  componentWillMount() {
    window.setTimeout(() => Bootstrap.carousel('#carouselExampleCaptions'), 2000);
  }

  render() {
    return (
      <Carousel w="100" id="carouselExampleCaptions">
        <Carousel.Indicators>
          <Carousel.Indicator target="#carouselExampleCaptions" to="0" active />
          <Carousel.Indicator target="#carouselExampleCaptions" to="1" />
          <Carousel.Indicator target="#carouselExampleCaptions" to="2" />
        </Carousel.Indicators>
        <Carousel.Inner>
          <Carousel.Item active>
            <BImg display="block" w="100" src={first_src} />
            <Carousel.Caption display="none md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item><BImg display="block" w="100" src={second_src} /></Carousel.Item>
          <Carousel.Item><BImg display="block" w="100" src={third_src} /></Carousel.Item>
        </Carousel.Inner>
        <Carousel.Prev href="#carouselExampleCaptions">
          <Carousel.Prev.Icon />
        </Carousel.Prev>
        <Carousel.Next href="#carouselExampleCaptions">
          <Carousel.Next.Icon />
        </Carousel.Next>
      </Carousel>
    )
  }
}
```

### Crossfade

Add `fade` to your carousel to animate slides with a fade transition instead of a slide.

```
renderComp: carousel_5
import React, { Component } from 'react';
import Bootstrap, { Carousel, BImg } from 'bootstrap-4-react';

const first_src = 'data:image/svg+xml;charset=UTF-8,' +
  '<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"286"%20height%3D"180"%20viewBox%3D"0%200%20286%20180"%20preserveAspectRatio%3D"none">' +
  '<g%20fill%3D"rgba(255%2C255%2C255%2C.75)"%20font-family%3D"Helvetica%2C%20monospace"%20font-size%3D"14pt">' +
  '<rect%20width%3D"286"%20height%3D"180"%20fill%3D"#777"%2F>' +
  '<g><text%20x%3D"99.4296875"%20y%3D"96.6">First slide<%2Ftext><%2Fg>' +
  '<%2Fg><%2Fsvg>';

const second_src = first_src.replace('First', 'Second');
const third_src = first_src.replace('First', 'Third');

export default class App extends Component {
  // A workaround since documentation pages are server-side-rendered
  // In most projects can be:
  // componentDidMount() {
  //   Bootstrap.carousel();
  // }
  componentWillMount() {
    window.setTimeout(() => Bootstrap.carousel('#carouselExampleFade'), 2000);
  }

  render() {
    return (
      <Carousel w="100" id="carouselExampleFade" fade>
        <Carousel.Inner>
          <Carousel.Item active><BImg display="block" w="100" src={first_src} /></Carousel.Item>
          <Carousel.Item><BImg display="block" w="100" src={second_src} /></Carousel.Item>
          <Carousel.Item><BImg display="block" w="100" src={third_src} /></Carousel.Item>
        </Carousel.Inner>
        <Carousel.Prev href="#carouselExampleFade">
          <Carousel.Prev.Icon />
        </Carousel.Prev>
        <Carousel.Next href="#carouselExampleFade">
          <Carousel.Next.Icon />
        </Carousel.Next>
      </Carousel>
    )
  }
}
```
