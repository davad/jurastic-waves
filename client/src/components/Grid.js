
import Relay from 'react-relay';
import React, { Component } from 'react';

class Grid extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
      <h2>GRID</h2>
      <div>{this.props.dinosaurs}</div>
      </div>
    );
  }
}

export default Relay.createContainer(Grid, {
  initialVariables: {
    period: 'jurassic'
  },
  fragments: {
    dinosaurs: () => Relay.QL`
      fragment on GeologicPeriod {
        dinosaurs(period: $period) {
          id
        }
      }
    `
  }
});
