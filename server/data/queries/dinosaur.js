
import { GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';

import DinosaurType from '../types/dinosaur'; 

export const queryDinosaurList = {
  type: new GraphQLList(DinosaurType),
  args: {
    dinosaurId: {
      name: 'dinosaurId',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params, options) {
     return {
       dinosaur: 1
     } 
  }
  
}

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
     } 
  } 
}
