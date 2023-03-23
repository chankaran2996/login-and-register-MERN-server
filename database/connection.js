// importing mongoose to connect with mongoDB
import mongoose from "mongoose";
// connceting with mongoDB 
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        useCreateIndex: true, 
        useFindAndModify: false, 
        useNewUrlParser: true, 
        useUnifiedTopology: true
      });
      console.log("connected to MONGODB");
    } catch (err) {
      throw err;
      process.exit();
    }
  };
//  exporting the connection
export default connectDB;