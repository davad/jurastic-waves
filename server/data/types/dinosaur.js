
import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import {
  connectionArgs,
  connectionFromArray,
  cursorToOffset,
  globalIdField,
  connectionDefinitions
} from 'graphql-relay';

import DinosaurModel from '../models/dinosaur';
import { nodeInterface } from '../interfaces';

export const DinosaurType = new GraphQLObjectType({
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
      type: GraphQLString
    }
  }
});

const {
  connectionType: DinosaurListConnection,
  edgeType: DinosaurListEdge
} = connectionDefinitions({
  name: 'Dinosaur',
  nodeType: DinosaurType,
});

/**
 * We get the node interface and field from the Relay library.
 *
 * The first method defines the way we resolve an ID to its object.
 * The second defines the way we resolve a node object to its GraphQL type.
 */
export const DinosaurListType = new GraphQLObjectType({
  name: 'DinosaurList',
  fields: () => ({
    id: globalIdField('DinosaurList'),
    dinosaurs: {
      type: DinosaurListConnection,
      description: 'The dinosaurs part of this geologic period.',
      args: Object.assign({
        period: {
          name: 'period',
          type: GraphQLInt,
          defaultValue: 1
        }
      }, connectionArgs),
      resolve: (period, args) => {
        const start = args.after ? cursorToOffset(args.after) + 1 : 0;
        const size = (args.first || 8) + 1;

        if (args.period !== null) {

        } else {

        }

        return new Promise((resolve, reject) => {
          DinosaurModel.find({}, (err, dinosaurs) => {
            if (err) {
              reject(err);
            } else {
              resolve(
                connectionFromArray(
                  dinosaurs,
                  args
                )
              );
            }
          }).limit(size).skip(start);
        });
      }
    },
    totalNumberOfDinosaurs: {
      type: GraphQLInt,
      description: 'The total number of dinos.',
      resolve: (nm, args) => DinosaurModel.count({}, (err, count) => count)
    }
  }),
  interfaces: [nodeInterface]
});
