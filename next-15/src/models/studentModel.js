import { Schema, model, models } from 'mongoose';

const studentSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true
    },
    father_name: {
      type: String,
      trim: true,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: true
    },
    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Course',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Student = models.students || model('students', studentSchema);

export default Student;
