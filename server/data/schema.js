
import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { geologicPeriod, queryDinosaurList, queryDinosaur } from  './queries/dinosaur';
import { nodeField } from './interfaces';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    geologicPeriod,
    dinosaur: queryDinosaur,
    dinosaurList: queryDinosaurList
  })
});

export const Schema = new GraphQLSchema({
  query: queryType
});

export default Schema;
