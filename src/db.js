import mongoose from 'mongoose';

const dbURI = 'mongodb://localhost:27017'

export const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log('>>>>> Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
};
