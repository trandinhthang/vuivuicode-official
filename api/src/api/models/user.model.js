import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  role: {
    type: Number,
    required: true,
  },
  is_deleted: { type: Boolean, default: false },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('user', UserSchema);
