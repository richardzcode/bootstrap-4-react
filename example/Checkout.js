import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Lead,
  Badge,
  ListGroup,
  List,
  Form,
  InputGroup,
  Button,
  BDiv,
  BH2,
  BH4,
  BH6,
  BSpan,
  BImg,
  BSmall,
  BHr,
  BFooter,
  BP
} from 'bootstrap-4-react';

const style = {
  minWidth: '100vw',
  minHeight: '100vh',
  container: {
    maxWidth: '960px'
  },
  lhCondensed: {
    lineHeight: '1.25'
  }
}

const Intro = props => (
  <BDiv py="5" text="center">
    <BImg
      display="block"
      mx="auto"
      mb="4"
      src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg"
      width="72"
      height="72"
    />
    <BH2>Checkout form</BH2>
    <Lead>Below is an example form built entirely with Bootstrap&#39;s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</Lead>
  </BDiv>
)

const CartItem = props => (
  <ListGroup.Item display="flex" justifyContent="between" style={style.lhCondensed}>
    {props.children}
  </ListGroup.Item>
)

const Cart = props => (
  <React.Fragment>
    <BH4 display="flex" justifyContent="between" alignItems="center" mb="3">
      <BSpan text="muted">Your cart</BSpan>
      <Badge secondary pill>3</Badge>
    </BH4>
    <ListGroup mb="3">
      <CartItem>
        <div>
          <BH6 my="0">Product name</BH6>
          <BSmall text="muted">Brief description</BSmall>
        </div>
        <BSpan text="muted">$12</BSpan>
      </CartItem>
      <CartItem>
        <div>
          <BH6 my="0">Second product</BH6>
          <BSmall text="muted">Brief description</BSmall>
        </div>
        <BSpan text="muted">$8</BSpan>
      </CartItem>
      <CartItem>
        <div>
          <BH6 my="0">Third item</BH6>
          <BSmall text="muted">Brief description</BSmall>
        </div>
        <BSpan text="muted">$5</BSpan>
      </CartItem>
      <CartItem>
        <BDiv text="success">
          <BH6 my="0">Promo code</BH6>
          <BSmall>EXAMPLECODE</BSmall>
        </BDiv>
        <BSpan text="success">-$5</BSpan>
      </CartItem>
      <CartItem>
        <span>Total (USD)</span>
        <strong>$20</strong>
      </CartItem>
    </ListGroup>
    <Form className="card" p="2">
      <InputGroup>
        <Form.Input placeholder="Promo code" />
        <InputGroup.Append>
          <Button type="submit" secondary>Redeem</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  </React.Fragment>
)

const Billing = props => (
  <React.Fragment>
    <BH4 mb="3">Billing address</BH4>
    <Row>
      <Col md="6" mb="3">
        <label htmlFor="firstName">First name</label>
        <Form.Input id="firstName" required />
        <Form.Feedback invalid>Valid first name is required.</Form.Feedback>
      </Col>
      <Col md="6" mb="3">
        <label htmlFor="lastName">Last name</label>
        <Form.Input id="lastName" required />
        <Form.Feedback invalid>Valid last name is required.</Form.Feedback>
      </Col>
    </Row>
    <BDiv mb="3">
      <label htmlFor="username">Username</label>
      <InputGroup>
        <InputGroup.Prepend><InputGroup.Text>@</InputGroup.Text></InputGroup.Prepend>
        <Form.Input id="username" placeholder="Username" required />
        <Form.Feedback invalid>Your username is required.</Form.Feedback>
      </InputGroup>
    </BDiv>
    <BDiv mb="3">
      <label htmlFor="email">Email</label>
      <Form.Input type="email" id="email" placeholder="you@example.com" />
      <Form.Feedback invalid>Please enter a valid email address for shipping updates.</Form.Feedback>
    </BDiv>
    <BDiv mb="3">
      <label htmlFor="address">Address</label>
      <Form.Input type="text" id="address" placeholder="1234 Main St" />
      <Form.Feedback invalid>Please enter your shipping address.</Form.Feedback>
    </BDiv>
    <BDiv mb="3">
      <label htmlFor="address2">Address 2<BSpan text="muted">(Optional)</BSpan></label>
      <Form.Input type="text" id="address2" placeholder="Apartment or suite" />
    </BDiv>
    <Row>
      <Col md="5" mb="3">
        <label htmlFor="country">Country</label>
        <Form.Select display="block" w="100" id="country" required>
          <option value="">Choose...</option>
          <option>United States</option>
        </Form.Select>
        <Form.Feedback invalid>Please select a valid country.</Form.Feedback>
      </Col>
      <Col md="4" mb="3">
        <label htmlFor="state">State</label>
        <Form.Select display="block" w="100" id="state" required>
          <option value="">Choose...</option>
          <option>California</option>
        </Form.Select>
        <Form.Feedback invalid>Please provide a valid state.</Form.Feedback>
      </Col>
      <Col md="3" mb="3">
        <label htmlFor="zip">Zip</label>
        <Form.Input type="text" id="zip" required />
        <Form.Feedback invalid>Zip code required.</Form.Feedback>
      </Col>
    </Row>
  </React.Fragment>
)

const Checks = props => (
  <React.Fragment>
    <Form.Check>
      <Form.CheckInput type="checkbox" id="same-address" />
      <label htmlFor="same-address">
        Shipping address is the same as my billing address
      </label>
    </Form.Check>
    <Form.Check>
      <Form.CheckInput type="checkbox" id="save-info" />
      <label htmlFor="save-info">
        Save this information for next time
      </label>
    </Form.Check>
  </React.Fragment>
)

const Payment = props => (
  <React.Fragment>
    <BH4 mb="3">Payment</BH4>
    <BDiv display="block" my="3">
      <Form.Check>
        <Form.CheckInput type="radio" id="credit" name="paymentMethod" defaultChecked required />
        <label htmlFor="credit">Credit card</label>
      </Form.Check>
      <Form.Check>
        <Form.CheckInput type="radio" id="debit" name="paymentMethod" required />
        <label htmlFor="credit">Debit card</label>
      </Form.Check>
      <Form.Check>
        <Form.CheckInput type="radio" id="paypal" name="paymentMethod" required />
        <label htmlFor="paypal">Paypal</label>
      </Form.Check>
    </BDiv>
    <Row>
      <Col md="6" mb="3">
        <label htmlFor="cc-name">Name on card</label>
        <Form.Input id="cc-name" required />
        <Form.Feedback invalid>Name on card is required.</Form.Feedback>
      </Col>
      <Col md="6" mb="3">
        <label htmlFor="cc-number">Credit card number</label>
        <Form.Input id="cc-number" required />
        <Form.Feedback invalid>Credit card number is required.</Form.Feedback>
      </Col>
    </Row>
    <Row>
      <Col md="3" mb="3">
        <label htmlFor="cc-expiration">Expiration</label>
        <Form.Input id="cc-expiration" required />
        <Form.Feedback invalid>Expiration date required.</Form.Feedback>
      </Col>
      <Col md="3" mb="3">
        <label htmlFor="cc-cvv">CVV</label>
        <Form.Input id="cc-cvv" required />
        <Form.Feedback invalid>Security code required.</Form.Feedback>
      </Col>
    </Row>
  </React.Fragment>
)

const Footer = props => (
  <BFooter my="5" pt="5" text="muted center small">
    <BP mb="1">&copy; 2017-2018 Company Name</BP>
    <List inline>
      <List.Item inline><a href="#">Privacy</a></List.Item>
      <List.Item inline><a href="#">Terms</a></List.Item>
      <List.Item inline><a href="#">Support</a></List.Item>
    </List>
  </BFooter>
)

class App extends Component {
  render() {
    return (
        <BDiv bg="light" style={style}>
          <Container style={style.container}>
            <Intro />
            <Row>
              <Col col="md-4" order="md-2" mb="4">
                <Cart />
              </Col>
              <Col md="8" order="md-1">
                <Form needsValidation noValidate>
                  <Billing />
                  <BHr mb="4" />
                  <Checks />
                  <BHr mb="4" />
                  <Payment />
                  <BHr mb="4" />
                  <Button primary lg block type="submit">Continue to checkout</Button>
                </Form>
              </Col>
            </Row>
          </Container>
          <Footer />
        </BDiv>
    );
  }
}

export default App;
