
import { GraphQLObjectType, GraphQLString } from 'graphql';
import { globalIdField } from 'graphql-relay';

import { nodeInterface } from '../interfaces';

const geologicPeriodType = new GraphQLObjectType({
  name: 'GeologicPeriod',
  description: 'A Geologic period for Dinosaurs',
  fields: () => ({
    id: globalIdField('GeologicPeriod'),
    geologicPeriodId: {
      type: GraphQLString,
      description: 'id of geologic period in db',
      resolve: (geologicPeriod) => geologicPeriod.id
    },
    name: {
      type: GraphQLString,
      description: 'The name of the geologic period.'
    },
    dinosaurs: {
      type: shipConnection,
      description: 'The dinosaurs part of this geologic period.',
      args: {},
      resolve: (period, args) =>
        period.dinosaurs.map((id) => getShip(id))
    }
  }),
  interfaces: [nodeInterface]
});

export default geologicPeriodType;
