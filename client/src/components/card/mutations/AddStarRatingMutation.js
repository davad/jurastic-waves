import Relay from 'react-relay';

export default class AddStarRatingMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation{ addStars }`;
  }

  getConfigs() {
    const { viewer, dinosaur } = this.props;

    return [{
      type: 'FIELDS_CHANGE',
      fieldIDs: {
        dinosaur: dinosaur.id,
      }
    }];
  }

  getFatQuery() {
    return Relay.QL`
      fragment on AddStarRatingPayload {
        viewer {
          id,
          dinosaurs
        }
      }
    `;
  }

  getVariables() {
    return {
      id: this.props.id,
      stars: this.props.stars
    };
  }

  getOptimisticResponse() {
    const { dinosaur } = this.props;

    return {
      dinosaur: {
        id: dinosaur.id,
        stars: dinosaur.stars + 1
      }
    };
  }
}

AddStarRatingMutation.fragments = {
  dinosaur: () => Relay.QL`
    fragment on Dinosaur {
      id,
      stars
    }
  `
};
