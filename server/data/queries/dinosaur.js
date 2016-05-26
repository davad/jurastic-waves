
import { GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';

import { DinosaurType, DinosaurListType } from '../types/dinosaur';
import DinosaurModel from '../models/dinosaur';

// Try queries at http://localhost:8080/

/** GraphQl query resolved by mongo lookup
  query {
    dinosaur(id: "56f040f92ec6d82eba611d5f") {
      name
    }
  }
 **/
export const queryDinosaur = {
  type: DinosaurType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    return DinosaurModel.findById(params.id, (dinosaur) => dinosaur);
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
    // Return all dinosaurs in db
    return DinosaurModel.find({}, (err, dinosaurs) => dinosaurs);
  }
};

export const queryDinosaurs = {
  type: DinosaurListType,
  args: {},
  resolve: () => true
};
