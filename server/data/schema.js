
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

// import { queryDinosaurList, queryDinosaur } from './queries/dinosaur';
// import { queryGeologicPeriod } from './queries/geologicPeriod';
// import GeologicPeriodType from './types/geologicPeriod';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  cursorForObjectInConnection,
  cursorToOffset,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
  toGlobalId,
} from 'graphql-relay';

import DinosaurModel from './models/dinosaur';

function getGeoPeriod() { return 'red'; }

function getDinosaur() { return 'blue';}


/**
 * We get the node interface and field from the Relay library.
 *
 * The first method defines the way we resolve an ID to its object.
 * The second defines the way we resolve a node object to its GraphQL type.
 */
const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    let value = {};

    console.log(`TYPE GeologicPeriod: ${type}`);

    if (type === 'GeologicPeriod') {
      value = getGeoPeriod(id);
    } else if (type === 'Dinosaur') {
      value = getDinosaur(id);
    }

    return value;
  },
  (obj) => {
    console.log(obj);
    if (obj instanceof Dinosaur) {
      return DinosaurListType;
    }
    else if (obj instanceof DinosaurList) {
      return DinosaurType;
    }

    return 'bear';
  });

const DinosaurType = new GraphQLObjectType({
  name: 'Dinosaur',
  description: 'A Dino creature beloning to the family Animilia',
  fields: {
    id: globalIdField('Dinosaur'),
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
  },
  interfaces: [nodeInterface]
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
      args: {
        period: {
          name: 'period',
          type: GraphQLInt,
          defaultValue: 1
        },
        ...connectionArgs
      },
      resolve: (period, args) => {
        const start = args.after ? cursorToOffset(args.after) + 1 : 0;
        const size = (args.first || 8) + 1;

        console.log(...args);
        //const result = productService.findAll({ start, size });

        // support pagination
        //const array = args.after ? new Array(start).concat(result.items) : result.items;
        const tempArray = [
          {
            name: 'bear',
            id: 1
          },
          {
            name: 'blue',
            id: 5
          }
        ]
        return connectionFromArray(
          tempArray,
          args
        );
      }
    },
    totalNumberOfDinosaurs: {
      type: GraphQLInt,
      description: 'The total number of dinos.',
      resolve: (something, args) => {
        //const start = 0;
        //const size = 1;
        //const result = productService.findAll({ start, size });
        return 1;
      }
    }
  }),
  interfaces: [nodeInterface]
});

export const queryGeologicPeriod = {
  type: DinosaurListType,
  args: {},
  resolve(root, params, options) {
    return {
      geologicPeriodId: 1,
      name: 'Jurrasic',
      dinosaurs: []
    };
  }
};

export const queryDinosaur = {
  type: DinosaurType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params, options) {
    return DinosaurModel.findById('56f040f92ec6d82eba611d5f', (dinosaur) => dinosaur);
  }
};

/** GraphQl query for a list of dinosaurs
 query {
    dinosaurList {
      id,
      name
    }
  }
 */
export const queryDinosaurList = {
  type: new GraphQLList(DinosaurType),
  args: {},
  resolve(root, params, options) {
    // Return all dinosaurs in db
    return DinosaurModel.find({}, (err, dinosaurs) => dinosaurs);
  }
};

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    viewer: queryGeologicPeriod,
    queryDinosaurList,
    queryDinosaur
  })
});

export const Schema = new GraphQLSchema({
  query: queryType
});

export default Schema;
