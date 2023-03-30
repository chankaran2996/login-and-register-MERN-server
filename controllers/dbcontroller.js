// importing Qustions model for schema
import Qustions from "../models/qustionModel.js";
// importing user model for schema
import User from "../models/userModel.js";
// creating qustions in DB
export const addQustion = async (req, res) => {
  // Spliting data from req.bady to multiple varibles
  const { qustiontitle, explanation, answer, answerData } = req.body;
  const user = await Qustions.create({
    qustiontitle,
    explanation,
    answer,
    answerData,
  });
  if (user) {
    res.status(201).json({
      message: "Qustion added successfully ",
    });
  } else {
    // if user is not created saying user is not created
    res.status(400);
    throw new Error("failed to create");
  }
  // res.json("addQustion success");
};

// Fectch qustion from
export const qustionsView = async (req, res) => {
  try {
    const viewQustions = await Qustions.find({}, "qustiontitle");
    res.status(200).json({ viewQustions });
  } catch (error) {
    return res.status(500).send({ error });
  }
  // res.json("Qustions viewed")
};

// geting qustion by using qustion tile

export const qustion = async (req,res) => {

    const {qustiontitle,email } = req.body;
    try {
        let viewQustion = await Qustions.findOne({qustiontitle},{'qustiontitle':1,'explanation':1});
        const userdetials = await User.findOne({email},{'databaseName':1,'tableName':1});
        console.log(userdetials);
        let arr = viewQustion.explanation.split(" ");
        let replace = arr.map((e) => {
          let subarr = e.split("");
          if(subarr[0]=="#"){
            return userdetials.tableName[subarr[1]];
          }
          else{
            return e;
          }
        })
        viewQustion.explanation=replace.join(" ");
        res.status(200).json({viewQustion});
      } catch (error) {
        return res.status(500).send({error});
      }
}

// Validation for solution
export const validate = async (req,res) => {
  const {qustiontitle,email,solution } = req.body;
  try {
    let viewQustion = await Qustions.findOne({qustiontitle},{'answer':1,'answerData':1});
    const userdetials = await User.findOne({email},{'databaseName':1,'tableName':1}); 
    let arr = viewQustion.answer.split(" ");
    let replace = arr.map((e) => {
    let subarr = e.split("");
      if(subarr[0]=="#"){
        return userdetials.tableName[subarr[1]];
      }
      else{
        return e;
      }      
    });
    viewQustion.answer=replace.join(" ");
    if(viewQustion.answer==solution){
      const response = {
        'Message':"Test case success",
        'answerData':viewQustion.answerData
      };
      res.status(200).json({response});
    } 
    else{
      const response = {
        'Message':"Test case falied"
      };
      res.status(200).json({response});
    }  
  } catch (error) {
    return res.status(500).send({error});
  }
}