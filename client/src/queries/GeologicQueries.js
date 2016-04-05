
import Relay from 'react-relay';

export default {
  dinosaurs: () => Relay.QL`query {
    viewer
  }`
};
