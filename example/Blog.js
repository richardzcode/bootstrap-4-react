import React, { Component } from 'react';
import Bootstrap, {
  Navbar,
  Nav,
  Form,
  Carousel,
  Button,
  Container,
  Row,
  Col,
  Jumbotron,
  Display4,
  Lead,
  Card,
  List,
  BHeader,
  BA,
  BSvg,
  BDiv,
  BStrong,
  BH2,
  BH3,
  BH4,
  BP,
  BSpan,
  BImg
} from 'bootstrap-4-react';

const style = {
  h: {
    fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif'
  },
  header: {
    lineHeight: '1',
    logo: {
      fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif',
      fontSize: '2.25rem'
    }
  },
  navigator: {
    position: 'relative',
    zIndex: '2',
    height: '2.75rem',
    overflowY: 'hidden'
  },
  jumbovision: {
    header: {
      fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif',
      fontSize: '3rem'
    }
  },
  featured: {
    card: {
      height: '250px',
      image: {
        borderRadius: '0 3px 3px 0'
      }
    }
  },
  blog: {
    post: {
      marginBottom: '4rem',
      title: {
        fontFamily: '"Playfair Display", Georgia, "Times New Roman", serif',
        fontSize: '2.5rem',
        marginBottom: '0.25rem'
      },
      meta: {
        marginBottom: '1.25rem',
        color: '#999'
      }
    },
    pagination: {
      marginBottom: '4rem',
      button: {
        borderRadius: '2rem'
      }
    }
  },
  footer: {
    padding: '2.5rem 0',
    color: '#999',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderTop: '.05rem solid #e5e5e5'
  }
}

const PlayfairDisplay = props => (
  <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900" rel="stylesheet" />
)

const thumbnail = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_165d3e49a3c%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_165d3e49a3c%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.203125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'

const SearchIcon = props => (
  <BSvg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    mx="3"
  >
    <circle cx="10.5" cy="10.5" r="7.5"></circle>
    <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
  </BSvg>
)

const Header = props => (
  <BHeader py="3" style={style.header}>
    <Row flex="nowrap" justifyContent="between" alignItems="center">
      <Col col="4" pt="1">
        <BA text="muted" href="#">Subscribe</BA>
      </Col>
      <Col col="4" text="center">
        <BA text="dark" href="#" style={style.header.logo}>Large</BA>
      </Col>
      <Col col="4" display="flex" justifyContent="end" alignItems="center">
        <BA text="muted" href="#"><SearchIcon /></BA>
        <Button sm outline secondary>Sign up</Button>
      </Col>
    </Row>
  </BHeader>
)

const Navigator = props => (
  <BDiv style={style.navigator} py="1" mb="2">
    <Nav display="flex" justifyContent="between">
      <BA p="2" text="muted" href="#">World</BA>
      <BA p="2" text="muted" href="#">U.S.</BA>
      <BA p="2" text="muted" href="#">Technology</BA>
      <BA p="2" text="muted" href="#">Design</BA>
      <BA p="2" text="muted" href="#">Culture</BA>
      <BA p="2" text="muted" href="#">Business</BA>
      <BA p="2" text="muted" href="#">Politics</BA>
      <BA p="2" text="muted" href="#">Opinion</BA>
      <BA p="2" text="muted" href="#">Science</BA>
      <BA p="2" text="muted" href="#">Health</BA>
      <BA p="2" text="muted" href="#">Style</BA>
      <BA p="2" text="muted" href="#">Travel</BA>
    </Nav>
  </BDiv>
)

const Jumbovision = props => (
  <Jumbotron p="3 md-5" text="white" bg="dark" rounded>
    <Col md="6" px="0">
      <Display4 font="italic" style={style.jumbovision.header}>
        Title of a longer featured blog post
      </Display4>
      <Lead my="3">
        Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.
      </Lead>
      <Lead mb="0">
        <BA text="white" fontWeight="bold" href="#">Continue reading...</BA>
      </Lead>
    </Col>
  </Jumbotron>
)

const Featured = props => (
  <Row mb="2">
    <Col md="6">
      <Card flex="md-row" mb="4" shadow="sm" style={style.featured.card}>
        <Card.Body display="flex" flex="column" alignItems="start">
          <BStrong display="inline-block" mb="2" text="primary">World</BStrong>
          <BH3 mb="0" style={style.h}>
            <BA text="dark" href="#">Featured post</BA>
          </BH3>
          <BDiv text="muted" mb="1">Nov 12</BDiv>
          <Card.Text mb="auto">
            This is a wider card with supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <a href="#">Continue reading</a>
        </Card.Body>
        <BImg src={thumbnail} flex="auto" display="none lg-block" style={style.featured.card.image} />
      </Card>
    </Col>
    <Col md="6">
      <Card flex="md-row" mb="4" shadow="sm" style={style.featured.card}>
        <Card.Body display="flex" flex="column" alignItems="start">
          <BStrong display="inline-block" mb="2" text="primary">Design</BStrong>
          <BH3 mb="0" style={style.h}>
            <BA text="dark" href="#">Post title</BA>
          </BH3>
          <BDiv text="muted" mb="1">Nov 11</BDiv>
          <Card.Text mb="auto">
            This is a wider card with supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <a href="#">Continue reading</a>
        </Card.Body>
        <BImg src={thumbnail} flex="auto" display="none lg-block" style={style.featured.card.image} />
      </Card>
    </Col>
  </Row>
)

const Blog = props => (
  <React.Fragment>
    <BH3 pb="3" mb="4" font="italic" border="bottom" style={style.h}>From the Firehose</BH3>
    <div style={style.blog.post}>
      <BH2 style={style.blog.post.title}>Sample blog post</BH2>
      <p style={style.blog.post.meta}>January 1, 2014 by <a href="#">Mark</a></p>
      <p>This blog post shows a few different types of content that is supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>
      <hr />
      <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
      <blockquote>
        <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
      </blockquote>
      <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
      <h2 style={style.h}>Heading</h2>
      <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      <h3 style={style.h}>Sub-heading</h3>
      <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      <pre><code>Example code block</code></pre>
      <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
      <h3 style={style.h}>Sub-heading</h3>
      <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
      <ul>
        <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
        <li>Donec id elit non mi porta gravida at eget metus.</li>
        <li>Nulla vitae elit libero, a pharetra augue.</li>
      </ul>
      <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
      <ol>
        <li>Vestibulum id ligula porta felis euismod semper.</li>
        <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
        <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
      </ol>
      <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
    </div>
    <div style={style.blog.post}>
      <BH2 style={style.blog.post.title}>Another blog post</BH2>
      <p style={style.blog.post.meta}>December 23, 2013 by <a href="#">Jacob</a></p>
      <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
      <blockquote>
        <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
      </blockquote>
      <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
      <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
    </div>
    <div style={style.blog.post}>
      <BH2 style={style.blog.post.title}>New feature</BH2>
      <p style={style.blog.post.meta}>December 14, 2013 by <a href="#">Chris</a></p>
      <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
      <ul>
        <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
        <li>Donec id elit non mi porta gravida at eget metus.</li>
        <li>Nulla vitae elit libero, a pharetra augue.</li>
      </ul>
      <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
      <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
    </div>

    <Nav style={style.blog.pagination}>
      <Button outline primary mx="1" style={style.blog.pagination.button}>Older</Button>
      <Button outline secondary disabled mx="1" style={style.blog.pagination.button}>Newer</Button>
    </Nav>
  </React.Fragment>
)

const Sidebar = props => (
  <React.Fragment>
    <BDiv p="3" mb="3" bg="light" rounded>
      <BH4 font="italic" style={style.h}>About</BH4>
      <BP mb="0">
        Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
      </BP>
    </BDiv>
    <BDiv p="3">
      <BH4 font="italic" style={style.h}>Archives</BH4>
      <List unstyled mb="0">
        <List.Item><a href="#">March 2014</a></List.Item>
        <List.Item><a href="#">Feburary 2014</a></List.Item>
        <List.Item><a href="#">Janurary 2014</a></List.Item>
        <List.Item><a href="#">December 2013</a></List.Item>
        <List.Item><a href="#">November 2013</a></List.Item>
        <List.Item><a href="#">October 2013</a></List.Item>
        <List.Item><a href="#">September 2013</a></List.Item>
        <List.Item><a href="#">August 2013</a></List.Item>
        <List.Item><a href="#">July 2013</a></List.Item>
        <List.Item><a href="#">June 2013</a></List.Item>
        <List.Item><a href="#">May 2013</a></List.Item>
        <List.Item><a href="#">April 2013</a></List.Item>
      </List>
    </BDiv>
    <BDiv p="3">
      <BH4 font="italic" style={style.h}>Elsewhere</BH4>
        <List.Item><a href="#">GitHub</a></List.Item>
        <List.Item><a href="#">Twitter</a></List.Item>
        <List.Item><a href="#">Facebook</a></List.Item>
      <List unstyled>
      </List>
    </BDiv>
  </React.Fragment>
)

const Top = props => (
  <Container>
    <Header />
    <Navigator />
    <Jumbovision />
    <Featured />
  </Container>
)

const Main = props => (
  <Container as="main">
    <Row>
      <Col md="8">
        <Blog />
      </Col>
      <Col md="4" as="aside">
        <Sidebar />
      </Col>
    </Row>
  </Container>
)

const Footer = props => (
  <footer style={style.footer}>
    <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
    <p>
      <a href="#">Back to top</a>
    </p>
  </footer>
)

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PlayfairDisplay />
        <Top />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
