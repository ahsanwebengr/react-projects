import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.']
    },
    email: {
        type: String,
        required: [true, 'Email is required.']
    },
    age: {
        type: Number,
        required: [true, 'Age is required.']
    },
});

export const UserModel = mongoose.model('users', UserSchema);
