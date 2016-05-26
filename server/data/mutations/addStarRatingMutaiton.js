
import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import {
  fromGlobalId,
  mutationWithClientMutationId
} from 'graphql-relay';

import DinosaurModel from '../models/dinosaur';
import { queryDinosaurs } from '../queries/dinosaur';


export const addStarRatingMutation = mutationWithClientMutationId({
  name: 'AddStarRating',
  inputFields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    stars: { type: new GraphQLNonNull(GraphQLInt) }
  },
  outputFields: {
    viewer: queryDinosaurs
  },
  mutateAndGetPayload: ({ id, stars }) => {
    DinosaurModel.findByIdAndUpdate(id, { stars: stars + 1 }, (err, dinosaur) => dinosaur);

    return { id };
  }
});

export default addStarRatingMutation;
