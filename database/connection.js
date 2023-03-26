import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to MONGODB");
  } catch (err) {
    throw err;
    process.exit();
  }
};

export default connectDB;
