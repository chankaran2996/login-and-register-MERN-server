// importing model for schema
import Qustions from "../models/qustionModel.js";

export const addQustion = async (req,res) => {

  // Spliting data from req.bady to multiple varibles  
    const { qustiontitle,explanation,answer,answerData } = req.body;
    const user = await Qustions.create({
        qustiontitle,
        explanation,
        answer,
        answerData
      });
      if (user) {
        res.status(201).json({
        message : "Qustion added successfully "
        });
      } else {
        // if user is not created saying user is not created 
        res.status(400);
        throw new Error("failed to create");
      }
    // res.json("addQustion success");
}