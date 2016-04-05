
import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql';
import { globalIdField } from 'graphql-relay';

import DinosaurType from '../types/dinosaur';
import { nodeInterface } from '../interfaces';
function getGeoPeriod() {}

function getDinosaur() {}

/**
 * We get the node interface and field from the Relay library.
 *
 * The first method defines the way we resolve an ID to its object.
 * The second defines the way we resolve a node object to its GraphQL type.
 */

const GeologicPeriodType = new GraphQLObjectType({
  name: 'GeologicPeriod',
  description: 'A Geologic period for Dinosaurs',
  fields: () => ({
    id: globalIdField('GeologicPeriod'),
    geologicPeriodId: {
      type: GraphQLInt,
      description: 'id of geologic period in db',
      resolve: (geologicPeriod) => geologicPeriod.id
    },
    name: {
      type: GraphQLString,
      description: 'The name of the geologic period.'
    },
    dinosaurs: {
      type: new GraphQLList(DinosaurType),
      description: 'The dinosaurs part of this geologic period.',
      args: {},
      resolve: (period, args) =>
        period.dinosaurs.map((id) => getDinosaur(id))
    }
  }),
  interfaces: [nodeInterface]
});

export default GeologicPeriodType;
