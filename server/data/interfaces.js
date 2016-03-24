
import { fromGlobalId, nodeDefinitions } from 'graphql-relay';
import geologicPeriodType from './types/geologicPeriodType';
/**
 * We get the node interface and field from the Relay library.
 *
 * The first method defines the way we resolve an ID to its object.
 * The second defines the way we resolve a node object to its GraphQL type.
 */
const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    let value = null;
    if (type === 'GeologicPeriod') {
      value = getGeoPeriod(id);
    } else if (type === 'Dinosaur') {
      value = getDinosaur(id);
    }

    return value;
  },
  (obj) => {
    return obj.dinosaurs ? geologicPeriodType : dinoType;
  }
);

export { nodeInterface, nodeField };
