

import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { queryDinosaurList, queryDinosaur } from  './queries/dinosaur';
import { fromGlobalId, globalIdField, nodeDefinitions } from 'graphql-relay';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    dinosaur: queryDinosaur,
    dinosaurList: queryDinosaurList
  })
});

export const Schema = new GraphQLSchema({
  query: queryType
});

export default Schema;
