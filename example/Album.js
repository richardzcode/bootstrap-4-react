import React, { Component } from 'react';
import {
  Collapse,
  Container,
  Row,
  Col,
  List,
  Navbar,
  Jumbotron,
  Lead,
  Button,
  ButtonGroup,
  Card,
  BH1,
  BH4,
  BP,
  BA,
  BDiv,
  BSmall,
  BFooter
} from 'bootstrap-4-react';

const thumbnailSrc = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22508%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20508%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16544932167%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16544932167%22%3E%3Crect%20width%3D%22508%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22169.7578125%22%20y%3D%22123.9%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

const AlbumCard = (props) => {
  return (
    <Col md="4">
      <Card mb="4" shadow="sm">
        <Card.Image top src={thumbnailSrc} />
        <Card.Body>
          <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
          <BDiv display="flex" justifyContent="between" alignItems="center">
            <ButtonGroup>
              <Button secondary outline sm>View</Button>
              <Button secondary outline sm>Edit</Button>
            </ButtonGroup>
            <BSmall text="muted">9 mins</BSmall>
          </BDiv>
        </Card.Body>
      </Card>
    </Col>
  )
}

const AlbumHeader = (props) => {
  return (
    <header>
      <Collapse bg="dark" id="navbarHeader">
        <Container>
          <Row>
            <Col col="sm-8 md-4" py="4">
              <BH4 text="white">About</BH4>
              <BP text="muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</BP>
            </Col>
            <Col sm="4" offset="md-1" py="4">
              <BH4 text="white">Contact</BH4>
              <List unstyled>
                <List.Item><BA href="#" text="white">Follow on Twitter</BA></List.Item>
                <List.Item><BA href="#" text="white">Like on Facebook</BA></List.Item>
                <List.Item><BA href="#" text="white">Email me</BA></List.Item>
              </List>
            </Col>
          </Row>
        </Container>
      </Collapse>
      <Navbar dark bg="dark" shadow="sm">
        <Container display="flex" justifyContent="between">
          <Navbar.Brand href="#" display="flex" alignItems="center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            <strong>Album</strong>
          </Navbar.Brand>
          <Navbar.Toggler target="#navbarHeader" aria-controls="navbarHeader" aria-label="Toggle navigation" />
        </Container>
      </Navbar>
    </header>
  )
}

const AlbumFooter = (props) => {
  return (
    <BFooter text="muted">
      <Container>
        <BP float="right"><a href="#">Back to top</a></BP>
        <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
        <p>New to Bootstrap? <a href="../../">Visit the homepage</a> or read our <a href="../../getting-started/">getting started guide</a>.</p>
      </Container>
    </BFooter>
  )
}

const AlbumJumbotron = (props) => {
  const style = {
    backgroundColor: '#fff',
    heading: {
      fontWeight: '300'
    }
  }

  return (
    <Jumbotron text="center" style={style}>
      <Container>
        <BH1 style={style.heading}>Album example</BH1>
        <Lead text="muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don&#39;t simply skip over it entirely.</Lead>
      </Container>
      <p>
        <Button primary mx="1" my="2">Main call to action</Button>
        <Button secondary mx="1" my="2">Secondary action</Button>
      </p>
    </Jumbotron>
  )
}

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AlbumHeader />
        <main role="main">
          <AlbumJumbotron />
          <BDiv py="5" bg="light">
            <Container>
              <Row>
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
                <AlbumCard />
              </Row>
            </Container>
          </BDiv>
        </main>
        <AlbumFooter />
      </React.Fragment>
    );
  }
}

export default App;
