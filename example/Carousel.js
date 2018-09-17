import React, { Component } from 'react';
import Bootstrap, {
  Navbar,
  Nav,
  Form,
  Carousel,
  Button,
  Lead,
  Container,
  Row,
  Col,
  BP,
  BSpan,
  BImg
} from 'bootstrap-4-react';

const style = {
  carousel: {
    marginBottom: '4rem',
    slide: {
      image: {
        minWidth: '100%',
        height: '32rem'
      },
      caption: {
        marginBottom: '3rem'
      },
      p: {
        fontSize: '1.25rem',
        marginBottom: '1.25rem'
      }
    }
  },
  marketing: {
    color: '#5a5a5a',
    item: {
      marginBottom: '1.5rem',
      textAlign: 'center'
    }
  },
  featurette: {
    divider: {
      margin: '5rem 0'
    },
    image: {
      width: '500px',
      height: '500px'
    }
  }
}

const img_1x1 = "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
const img_500x500 = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_165ca78bc3b%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_165ca78bc3b%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.125%22%20y%3D%22261.4%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"

const Menu = props => (
  <Navbar expand="md" dark fixed="top" bg="dark">
    <Navbar.Brand href="#">Carousel</Navbar.Brand>
    <Navbar.Toggler
      target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    />
    <Navbar.Collapse id="navbarCollapse">
      <Navbar.Nav mr="auto">
        <Nav.ItemLink href="#" active>Home <BSpan srOnly>(current)</BSpan></Nav.ItemLink>
        <Nav.ItemLink href="#">Link</Nav.ItemLink>
        <Nav.ItemLink href="#" disabled>Disabled</Nav.ItemLink>
      </Navbar.Nav>
      <Form inline mt="2 md-0">
        <Form.Input mr="sm-2" type="text" placeholder="Search" aria-label="Search" />
        <Button outline success my="2 sm-0" type="submit">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
)

const MyCarousel = props => (
  <Carousel id="myCarousel" style={style.carousel}>
    <Carousel.Indicators>
      <Carousel.Indicator target="#myCarousel" to="0" active />
      <Carousel.Indicator target="#myCarousel" to="1" />
      <Carousel.Indicator target="#myCarousel" to="2" />
    </Carousel.Indicators>
    <Carousel.Inner>
      <Carousel.Item active>
        <img src={img_1x1} style={style.carousel.slide.image} />
        <Container>
          <Carousel.Caption text="left" style={style.carousel.slide.caption}>
            <h1>Example headline.</h1>
            <p style={style.carousel.slide.p}>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
            </p>
            <Button primary lg>Learn more</Button>
          </Carousel.Caption>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img_1x1} style={style.carousel.slide.image} />
        <Container>
          <Carousel.Caption style={style.carousel.slide.caption}>
            <h1>Another example headline.</h1>
            <p style={style.carousel.slide.p}>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
            </p>
            <Button primary lg>Learn more</Button>
          </Carousel.Caption>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img_1x1} style={style.carousel.slide.image} />
        <Container>
          <Carousel.Caption text="right" style={style.carousel.slide.caption}>
            <h1>One more for good measure.</h1>
            <p style={style.carousel.slide.p}>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
            </p>
            <Button primary lg>Learn more</Button>
          </Carousel.Caption>
        </Container>
      </Carousel.Item>
    </Carousel.Inner>
    <Carousel.Prev href="#myCarousel">
      <Carousel.Prev.Icon />
    </Carousel.Prev>
    <Carousel.Next href="#myCarousel">
      <Carousel.Next.Icon />
    </Carousel.Next>
  </Carousel>
)

const Marketing = props => (
  <Row>
    <Col col="lg-4" style={style.marketing.item}>
      <BImg src={img_1x1} rounded="circle" width="140" height="140" />
      <h2>Heading</h2>
      <BP mx="3">
        Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
      </BP>
      <Button secondary>View details &raquo;</Button>
    </Col>
    <Col col="lg-4" style={style.marketing.item}>
      <BImg src={img_1x1} rounded="circle" width="140" height="140" />
      <h2>Heading</h2>
      <BP mx="3">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.
      </BP>
      <Button secondary>View details &raquo;</Button>
    </Col>
    <Col col="lg-4" style={style.marketing.item}>
      <BImg src={img_1x1} rounded="circle" width="140" height="140" />
      <h2>Heading</h2>
      <BP mx="3">
        Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
      </BP>
      <Button secondary>View details &raquo;</Button>
    </Col>
  </Row>
)

const Featurette = props => (
  <React.Fragment>
    <hr style={style.featurette.divider} />
    <Row>
      <Col col="md-7">
        <h2>First featurette heading. <BSpan text="muted">It will blow your mind.</BSpan></h2>
        <Lead>
          Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
        </Lead>
      </Col>
      <Col col="md-5">
        <BImg fluid src={img_500x500} mx="auto" style={style.featurette.image} />
      </Col>
    </Row>
    <hr style={style.featurette.divider} />
    <Row>
      <Col col="md-7" order="md-2">
        <h2>Oh yeah, it is that good.  <BSpan text="muted">See for yourself.</BSpan></h2>
        <Lead>
          Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
        </Lead>
      </Col>
      <Col col="md-5" order="md-1">
        <BImg fluid src={img_500x500} mx="auto" style={style.featurette.image} />
      </Col>
    </Row>
    <hr style={style.featurette.divider} />
    <Row>
      <Col col="md-7">
        <h2>And lastly, this one. <BSpan text="muted">Checkmate.</BSpan></h2>
        <Lead>
          Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.
        </Lead>
      </Col>
      <Col col="md-5">
        <BImg fluid src={img_500x500} mx="auto" style={style.featurette.image} />
      </Col>
    </Row>
    <hr style={style.featurette.divider} />
  </React.Fragment>
)

const Footer = props => (
  <Container as="footer">
    <BP float="right"><a href="#">Back to top</a></BP>
    <p>&copy; 2017-2018 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
  </Container>
)

class App extends Component {
  componentDidMount() {
    Bootstrap.carousel();
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <Menu />
        </header>
        <main role="main">
          <MyCarousel />
          <Container style={style.marketing}>
            <Marketing />
            <Featurette />
          </Container>
          <Footer />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
