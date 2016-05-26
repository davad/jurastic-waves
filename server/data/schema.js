
import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql';

import {
  queryDinosaurList,
  queryDinosaur,
  queryDinosaurs
} from './queries/dinosaur';

import addStarRatingMutation from './mutations/addStarRatingMutaiton';
import { nodeField } from './interfaces';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    viewer: queryDinosaurs,
    queryDinosaurList,
    queryDinosaur
  })
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addStars: addStarRatingMutation
  }),
});

export const Schema = new GraphQLSchema({
  query,
  mutation
});

export default Schema;
