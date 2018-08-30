import React, { Component } from 'react';
import { List, Media, BImg, BH5 } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <List unstyled>
        <Media as="li">
          <BImg src="https://static.npmjs.com/images/avatars/Avatar1.svg" mr="3"/>
          <Media.Body>
            <BH5 mt="0">Media heading</BH5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media.Body>
        </Media>
        <Media as="li" my="4">
          <BImg src="https://static.npmjs.com/images/avatars/Avatar1.svg"  mr="3"/>
          <Media.Body>
            <BH5 mt="0">Media heading</BH5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media.Body>
        </Media>
        <Media as="li">
          <BImg src="https://static.npmjs.com/images/avatars/Avatar1.svg" mr="3"/>
          <Media.Body>
            <BH5 mt="0">Media heading</BH5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media.Body>
        </Media>
      </List>
    )
  }
}
