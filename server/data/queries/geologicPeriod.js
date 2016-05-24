
import { GraphQLString, GraphQLNonNull } from 'graphql';

import GeologicPeriodType from '../types/geologicPeriod';
import GeologicPeriodModel from '../models/geologicPeriod';

import { DinosaurListType } from '../types/dinosaur';

// Try queries at http://localhost:8080/

export const queryGeologicPeriod = {
  type: GeologicPeriodType,
  args: {},
  resolve(root, params, options) {
    return {
      geologicPeriodId: 1,
      name: 'Jurrasic',
      dinosaurs: []
    };
  }
};
