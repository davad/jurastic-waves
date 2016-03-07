
import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { queryDinosaurList, queryDinosaur } from  './queries/dinosaur';
 
const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      ...queryDinosaurList,
      ...queryDinosaur
    }
  })
});

export default Schema;
