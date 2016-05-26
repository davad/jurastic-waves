
import Relay from 'react-relay';
import React, { Component, PropTypes } from 'react';

import DinoCard from '../card/DinoCard';
import style from './style';

/**
 * Grid component will display sections of individual card components
 */

class Grid extends Component {

  render() {
    const { viewer } = this.props;

    return (
      <div>
        <div className={style.gridContainer}>
          <section className={style.cards}>
            {viewer.dinosaurs.edges.map((edge, index) => {
              return <DinoCard viewer={viewer} key={index} dinosaur={edge.node} />;
            })}
          </section>
        </div>
      </div>
    );
  }
}

Grid.propTypes = {
  viewer: PropTypes.object
};

export default Relay.createContainer(Grid, {
  initialVariables: {
    kingdom: 'Animalia',
    numItems: 500
  },
  fragments: {
    viewer: () => Relay.QL`
      fragment on DinosaurList {
        totalNumberOfDinosaurs,
        dinosaurs(first: $numItems, kingdom: $kingdom){
          edges {
           node {
            id,
            ${DinoCard.getFragment('dinosaur')}
            }
          }
        }
      }
    `
  }
});
