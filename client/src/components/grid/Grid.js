
import Relay from 'react-relay';
import React, { Component, PropTypes } from 'react';

import Card from '../card/Card';
import style from './style';

/**
 * Grid component will display sections of individual card components
 */

class Grid extends Component {

  static propTypes = {
    dinosaurs: PropTypes.array
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div className={style.heading}><h2>Jurassic Waves</h2> </div>
        <div className={style.gridContainer}>
          <div>{this.props.dinosaurs}</div>
          <section className={style.cards}>
            {Array(20).fill(null).map((i, index) => {
              return <Card key={index}/>;
            })}
          </section>
        </div>
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
        dinosaurs(period: $period)
      }
    `
  }
});
