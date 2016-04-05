
import Relay from 'react-relay';
import { Component } from 'react';

class Grid extends Component {
  render() {
    console.log(this.props);
    return <div>GRID</div>;
  }
}

export default Relay.createContainer(Grid, {
  fragments: {
    dinosaurs: () => Relay.QL`
      fragment on Dinosaur {
        id,
        name,
        imageUrl,
        shortDescription,
        longDescription,
        order,
        superOrder,
        kingdom,
        phylum
      }
    `
  }
});
