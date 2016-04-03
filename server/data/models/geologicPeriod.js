
import mongoose from 'mongoose';

const geologicPeriodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  geologicPeriodId: {
    type: Number,
    required: true
  },
  dinosaurs: {
    type: Array,
    required: false
  }
});

export default mongoose.model('GeologicPeriod', geologicPeriodSchema);
