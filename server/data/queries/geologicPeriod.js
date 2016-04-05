
import { GraphQLString, GraphQLNonNull } from 'graphql';

import GeologicPeriodType from '../types/geologicPeriod';
import GeologicPeriodModel from '../models/geologicPeriod';

import DinosaurType from '../types/dinosaur';
import DinosaurModel from '../models/dinosaur';

// Try queries at http://localhost:8080/

export const queryGeologicPeriod =  {
  type: GeologicPeriodType,
  args: {
    name: {
      name: 'name',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params, options) {
    return {
      geologicPeriodId: 1,
      name: 'Jurrasic',
      dinosaurs: []
    };
  }
};
