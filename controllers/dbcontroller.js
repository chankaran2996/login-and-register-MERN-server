// importing Qustions model for schema
import Qustions from "../models/qustionModel.js";
// importing user model for schema
import User from "../models/userModel.js";
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
        const viewQustions = await Qustions.find({},'qustiontitle');
        res.json({viewQustions});
      } catch (error) {
        return res.status(500).send({error});
      }
    // res.json("Qustions viewed")
}

// geting qustion by using qustion tile 

export const qustion = async (req,res) => {
    const {qustiontitle,email } = req.body;
    // console.log(qustiontitle);
    try {
        const viewQustion = await Qustions.findOne({qustiontitle});
        const userdetials = await User.findOne({email},'databaseName','tableName');
        const result = {
            'qnstionsdetials':viewQustion,
            'userdetials':userdetials
        }
        res.json({result});
      } catch (error) {
        return res.status(500).send({error});
      }
    // res.json("Qustions viewed")
}