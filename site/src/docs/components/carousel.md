## Carousel

```
import React, { Component } from 'react';
import { Carousel, BImg } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Carousel id="carouselExample" w="50" fade>
        <Carousel.Indicators>
          <Carousel.Indicator target="#carouselExample" to="0" active />
          <Carousel.Indicator target="#carouselExample" to="1" />
          <Carousel.Indicator target="#carouselExample" to="2" />
        </Carousel.Indicators>
        <Carousel.Inner>
          <Carousel.Item active>
            <BImg display="block" w="100" src="https://static.npmjs.com/images/avatars/Avatar1.svg"/>
            <Carousel.Caption style={{ background: 'orange' }}><h5>One</h5></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <BImg display="block" w="100" src="https://static.npmjs.com/images/avatars/Avatar2.svg"/>
            <Carousel.Caption style={{ background: 'orange' }}><h5>Two</h5></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <BImg display="block" w="100" src="https://static.npmjs.com/images/avatars/Avatar4.svg"/>
            <Carousel.Caption style={{ background: 'orange' }}><h5>Three</h5></Carousel.Caption>
          </Carousel.Item>
        </Carousel.Inner>
        <Carousel.Prev href="#carouselExample">
          <Carousel.Prev.Icon />
        </Carousel.Prev>
        <Carousel.Next href="#carouselExample">
          <Carousel.Next.Icon />
        </Carousel.Next>
      </Carousel>
    )
  }
}
```
