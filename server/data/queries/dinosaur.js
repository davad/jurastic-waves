
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
      id: 1,
      type: 'Asomroaus',
      imageUrl: 'httpsblach',
      kingdom: 'Beforeaus'
    };
  }
};

export const queryDinosaurList = {
  type: new GraphQLList(DinosaurType),
  args: {},
  resolve(root, params, options) {
    return [{
      id: 1,
      type: 'Asomroaus',
      imageUrl: 'httpsblach',
      kingdom: 'Beforeaus'
    }, {
      id: 2,
      type: 'Bsomroaus',
      imageUrl: 'httpsblach',
      kingdom: 'Seamouse'
    }];
  }
};

