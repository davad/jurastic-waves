
import {
  GraphQLSchema,
  GraphQLObjectType
} from 'graphql';

import {
  queryDinosaurList,
  queryDinosaur,
  queryDinosaurs
} from './queries/dinosaur';

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

export const Schema = new GraphQLSchema({
  query
});

export default Schema;
