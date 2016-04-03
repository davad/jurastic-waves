
import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { queryDinosaurList, queryDinosaur } from  './queries/dinosaur';
import { queryGeologicPeriod } from './queries/geologicPeriod';
import { nodeField } from './interfaces';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    geologicPeriods: queryGeologicPeriod,
    dinosaur: queryDinosaur,
    dinosaurList: queryDinosaurList
  })
});

export const Schema = new GraphQLSchema({
  query: queryType
});

export default Schema;
