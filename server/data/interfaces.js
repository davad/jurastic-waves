
import { fromGlobalId, nodeDefinitions } from 'graphql-relay';
import { DinosaurListType, DinosaurType } from './types/dinosaur';

import DinosaurModel from './models/dinosaur';

/**
 * We get the node interface and field from the Relay library.
 *
 * The first method defines the way we resolve an ID to its object.
 * The second defines the way we resolve a node object to its GraphQL type.
 */
export const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    let value = {};
    if (type === 'DinosaurList') {
      value = DinosaurModel.find({}, (err, dino) => dino);
    } else if (type === 'Dinosaur') {
      value = DinosaurModel.find(id, (err, dino) => dino);
    }

    return value;
  },
  (obj) => {
    if (obj instanceof DinosaurModel) {
      return DinosaurType;
    } else {
      return DinosaurListType;
    }
  });
