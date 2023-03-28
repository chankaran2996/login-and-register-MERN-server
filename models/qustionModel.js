// Importing mongoose 
import mongoose from "mongoose";


// Creating schema
const Qustion = mongoose.Schema(
  // Adding the fielleds and their type
  {
    qustiontitle : { type: String },
    explanation : {type : String },
    answer : { type: String },
    answerData: { type : String }
  },
  // Adding time stramps which used save datas timings entered in DB
  {
    timestamps: true,
  }
);

// Exporting schema
const Qustions = mongoose.model("Qustions", Qustion);
export default Qustions;
