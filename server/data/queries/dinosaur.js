
import { GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';

import DinosaurType from '../types/dinosaur';

export const queryDinosaur =  {
  type: DinosaurType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params, options) {
    return {
      dinosaur: 1
    };
  }
};

export const queryDinosaurList = {
  type: new GraphQLList(DinosaurType),
  args: {},
  resolve(root, params, options) {
    return [{
      name: 'Jim',
      id: 1
    }];
  }
};

