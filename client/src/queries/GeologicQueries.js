
import Relay from 'react-relay';

export default {
  viewer: () => Relay.QL`query {
    viewer
  }`
};

export const DinosaurQuery = {
  dinosaur: () => Relay.QL`query {
    queryDinosaur(id: $id)
  }`
};
