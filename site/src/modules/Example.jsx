import React, { Component } from 'react';
import {
  Jumbotron,
  Display4,
  Lead,
  Button,
  Card,
  BH4
} from 'bootstrap-4-react';

const ExampleCard = (props) => {
  const { title, description, bootstrapPath, b4rPath } = props;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Link href={"https://getbootstrap.com/docs/4.1/examples/" + bootstrapPath + "/"}>
          Bootstrap
        </Card.Link>
        <Card.Link href={"https://github.com/richardzcode/bootstrap-4-react/blob/master/example/" + b4rPath}>
          React
        </Card.Link>
      </Card.Body>
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
            bootstrapPath="album"
            b4rPath="Album.js"
          />
          <ExampleCard
            title="Pricing"
            description="Example pricing page built with Cards and featuring a custom header and footer."
            bootstrapPath="pricing"
            b4rPath="Pricing.js"
          />
          <ExampleCard
            title="Checkout"
            description="Custom checkout form showing our form components and their validation features."
            bootstrapPath="checkout"
            b4rPath="Checkout.js"
          />
        </Card.Deck>
      </React.Fragment>
    )
  }
}
