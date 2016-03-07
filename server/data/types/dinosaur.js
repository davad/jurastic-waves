
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID 
} from 'graphql';

// maybe this should be an interface and JurassicType references
const DinosaurType = new GraphQLObjectType({
  name: 'Dinosaur',
  description: 'A Dino creature beloning to the family Animilia',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The id of the Dinosaur'
    },
    name: {
      type: GraphQLString
    },
    shortDescription: {
      type: GraphQLString
    },
    longDescription: {
      type: GraphQLString
    },
    imageUrl: {
      type: GraphQLString
    },
    order: {
      type: GraphQLString
    },
    superOrder: {
      type: GraphQLString
    },
    kingdom: {
      type: GraphQLString
    },
    phylum: {
      type: GraphQLString
    },
    genus: {
      type: GraphQLString
    },
    geologicPeriod: {
      type: String
    }
  }
})

export default DinosaurType;
