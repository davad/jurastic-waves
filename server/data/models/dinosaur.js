
import mongoose from 'mongoose';

const dinosaurSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String
  },
  longDescription: {
    type: String
  },
  imageUrl: {
    type: String
  },
  order: {
    type: String
  },
  superOrder: {
    type: String
  },
  kingdom: {
    type: String
  },
  phylum: {
    type: String
  },
  genus: {
    type: String
  },
  geologicPeriod: {
    type: String
  }
});

export default mongoose.model('Dinosaur', dinosaurSchema);
