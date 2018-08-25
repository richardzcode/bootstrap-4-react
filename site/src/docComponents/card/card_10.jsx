import React, { Component } from 'react';
import { Card, BSmall, Blockquote } from 'bootstrap-4-react';

const img_src = 'data:image/svg+xml;charset=UTF-8,' +
  '<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"286"%20height%3D"180"%20viewBox%3D"0%200%20286%20180"%20preserveAspectRatio%3D"none">' +
  '<g%20fill%3D"rgba(255%2C255%2C255%2C.75)"%20font-family%3D"Helvetica%2C%20monospace"%20font-size%3D"14pt">' +
  '<rect%20width%3D"286"%20height%3D"180"%20fill%3D"#777"%2F>' +
  '<g><text%20x%3D"99.4296875"%20y%3D"96.6">286X180<%2Ftext><%2Fg>' +
  '<%2Fg><%2Fsvg>';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h6>Group</h6>
        <Card.Group mb="3">
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text><BSmall text="muted">Last updated 3 mins ago</BSmall></Card.Text>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text><BSmall text="muted">Last updated 3 mins ago</BSmall></Card.Text>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text><BSmall text="muted">Last updated 3 mins ago</BSmall></Card.Text>
            </Card.Footer>
          </Card>
        </Card.Group>

        <h6>Deck</h6>
        <Card.Deck mb="3">
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text><BSmall text="muted">Last updated 3 mins ago</BSmall></Card.Text>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text><BSmall text="muted">Last updated 3 mins ago</BSmall></Card.Text>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text><BSmall text="muted">Last updated 3 mins ago</BSmall></Card.Text>
            </Card.Footer>
          </Card>
        </Card.Deck>

        <h6>Columns</h6>
        <Card.Columns>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card p="3">
            <Card.Body mb="0">
              <Blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
                <Blockquote.Footer>
                  <BSmall text="muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </BSmall>
                </Blockquote.Footer>
              </Blockquote>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional content.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text><BSmall text="muted">Last updated 3 mins ago</BSmall></Card.Text>
            </Card.Footer>
          </Card>
          <Card bg="primary" text="white center" p="3">
            <Blockquote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              <Blockquote.Footer>
                <BSmall text="muted">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </BSmall>
              </Blockquote.Footer>
            </Blockquote>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has a regular title and short paragraphy of text below it.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text><BSmall text="muted">Last updated 3 mins ago</BSmall></Card.Text>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Image src={img_src} />
          </Card>
          <Card p="3" text="right">
            <Blockquote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              <Blockquote.Footer>
                <BSmall text="muted">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </BSmall>
              </Blockquote.Footer>
            </Blockquote>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Text><BSmall text="muted">Last updated 3 mins ago</BSmall></Card.Text>
            </Card.Footer>
          </Card>
        </Card.Columns>
      </React.Fragment>
    )
  }
}
