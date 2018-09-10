import React, { Component } from 'react';
import {
  Jumbotron,
  Display4,
  Lead,
  Button,
  Card,
  BH4,
  BImg
} from 'bootstrap-4-react';

const ExampleCard = (props) => {
  const { title, description, thumbnailPath, bootstrapPath, b4rPath } = props;
  return (
    <Card my="2" style={{ minWidth: '15rem' }}>
      <Card.Body>
        <BImg thumbnail mb="3" src={"https://getbootstrap.com/docs/4.1/examples/screenshots/" + thumbnailPath} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Link href={"https://getbootstrap.com/docs/4.1/examples/" + bootstrapPath + "/"}>
          Bootstrap
        </Card.Link>
        <Card.Link href={"https://github.com/richardzcode/bootstrap-4-react/blob/master/example/" + b4rPath}>
          React
        </Card.Link>
      </Card.Footer>
    </Card>
  )
}

export default class Example extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron>
          <Display4>Examples</Display4>
          <Lead mr="3">
            Quickly get a project started with any of our examples
          </Lead>
          <Button
            primary
            outline
            lg
            as="a"
            href="https://github.com/richardzcode/bootstrap-4-react/tree/master/example"
          >
            Download source code
          </Button>
        </Jumbotron>
        <BH4 ml="3">Components</BH4>
        <Card.Deck p="3">
          <ExampleCard
            title="Album"
            description="Simple one-page template for photo galleries, portfolios, and more."
            thumbnailPath="album.png"
            bootstrapPath="album"
            b4rPath="Album.js"
          />
          <ExampleCard
            title="Pricing"
            description="Example pricing page built with Cards and featuring a custom header and footer."
            thumbnailPath="pricing.png"
            bootstrapPath="pricing"
            b4rPath="Pricing.js"
          />
          <ExampleCard
            title="Checkout"
            description="Custom checkout form showing our form components and their validation features."
            thumbnailPath="checkout.png"
            bootstrapPath="checkout"
            b4rPath="Checkout.js"
          />
          <ExampleCard
            title="Product"
            description="Lean product-focused marketing page with extensive grid and image work."
            thumbnailPath="product.png"
            bootstrapPath="product"
            b4rPath="Product.js"
          />
          <ExampleCard
            title="Cover"
            description="A one-page template for building simple and beautiful home pages."
            thumbnailPath="cover.png"
            bootstrapPath="cover"
            b4rPath="Cover.js"
          />
        </Card.Deck>
      </React.Fragment>
    )
  }
}
