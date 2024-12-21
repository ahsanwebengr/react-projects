import { Schema, model, models } from 'mongoose';

const courseSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  type: {
    type: String,
    enum: ['Frontend', 'Backend', 'Full Stack', 'UI/UX', 'Other'],
    required: true,
  },
  description: { type: String },
  price: {
    type: Number,
    default: 0,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isTopSeller: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Course = models.courses || model('courses', courseSchema);

export default Course;
