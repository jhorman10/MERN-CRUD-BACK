import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: 'string',
    required: true,
    trim: true,
  },
  email: {
    required: true,
    type: 'string',
    trim: true,
    unique: true,
  },
  password: {
    type: 'string',
    required: true,
  },
});

export default mongoose.model('User', userSchema);
