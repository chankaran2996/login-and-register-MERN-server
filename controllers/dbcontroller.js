// importing model for schema
import Qustions from "../models/qustionModel.js";

// creating qustions in DB
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

// Fectch qustion from 
export const qustionsView = async (req,res) => {
    try {
        const user = await Qustions.find({},'qustiontitle');
        res.json(user);
      } catch (error) {
        return res.status(500).send({error});
      }
    res.json("Qustions viewed")
}