
import { GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';
import { fromGlobalId, globalIdField, nodeDefinitions } from 'graphql-relay';

import DinosaurType from '../types/dinosaur';
import DinosaurModel from '../models/dinosaur';

// Try queries at http://localhost:8080/

/** GraphQl query resolved by mongo lookup
  query {
    dinosaur(id: "56f040f92ec6d82eba611d5f") {
      name
    }
  }
 **/
export const queryDinosaur =  {
  type: DinosaurType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params, options) {
    return DinosaurModel.findById('56f040f92ec6d82eba611d5f', (dinosaur) => {
      return dinosaur;
    });
  }
};

/** GraphQl query for a list of dinosaurs
 query {
    dinosaurList {
      id,
      name
    }
  }
 */
export const queryDinosaurList = {
  type: new GraphQLList(DinosaurType),
  args: {},
  resolve(root, params, options) {
    return DinosaurModel.find({}, (err, dinosaurs) => {
      return dinosaurs;
    });
  }
};
