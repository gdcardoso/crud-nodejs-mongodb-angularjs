import mongoose from 'mongoose';

const PlansSchema = new mongoose.Schema(
  {
    code: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    initialValidity: {
      type: String,
      required: true,
    },
    finalValidity: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Plans', PlansSchema);
