import mongoose from 'mongoose';

const mongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDb connected !!!`);
  } catch (error) {
    console.log(`Error`, error);
    process.exit(1);
  }
};

export { mongoDb };
