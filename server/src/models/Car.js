import mongoose from 'mongoose';

const carSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    brand: { type: String, required: true, trim: true },
    category: { type: String, enum: ['luxury', 'suv', 'economy'], required: true },
    dailyRate: { type: Number, required: true, min: 0 },
    imageUrl: { type: String, required: true },
    available: { type: Boolean, default: true },
    description: { type: String, default: '' },
  },
  { timestamps: true }
);

carSchema.index({ category: 1 });
carSchema.index({ brand: 1, name: 1 }, { unique: true });

export const Car = mongoose.model('Car', carSchema);
