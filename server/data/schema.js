
import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { queryDinosaurList, queryDinosaur } from  './queries/dinosaur';
import { queryGeologicPeriod } from './queries/geologicPeriod';
import GeologicPeriodType from './types/geologicPeriod';

import { nodeField } from './interfaces';

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    viewer: {
      type: GeologicPeriodType
    },
    queryDinosaurList,
    queryDinosaur
  })
});

export const Schema = new GraphQLSchema({
  query: queryType
});

export default Schema;
