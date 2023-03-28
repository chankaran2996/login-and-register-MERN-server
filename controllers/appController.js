// Importing model for schema
import User from "../models/userModel.js";

// Registering user 
export const register = async (req, res, next) => {
  // Spliting data from req.bady to multiple varibles  
  const { name, email, password, pic } = req.body;

//   Chicking all fields entered or not 
  if (!name || !email || !password) {
    res.sendStatus(400);
    throw new Error("please enter all the fields");
  }
//  Chicking the user already exists or not
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }
//   Creating user 
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });
  if (user) {
    res.status(201).json({
    message : "User added successfully "
    });
  } else {
    // if user is not created saying user is not created 
    res.status(400);
    throw new Error("failed to create");
  }
};

export const login = async (req, res) => {
  // Spliting data from req.bady to multiple varibles  
  const { email, password } = req.body;
  if (!userExists) {
    res.status(400);
    throw new Error("User is not found");
  }
  try {
    const user = await User.findOne({ email });
  } catch (error) {
    return res.status(500).send({error});
  }

};

export const getUser = async (req, res) => {
  res.json("getUser success");
};

export const generateOTP = async (req, res) => {
  res.json("generateOTP success");
};

export const verfiyOTP = async (req, res) => {
  res.json("verfiyOTP success");
};

export const createReset = async (req, res) => {
  res.json("createReset success");
};

export const resetPassword = async (req, res) => {
  res.json("resetPassword success");
};

export const updateUser = async (req, res) => {
  res.json("updateUser success");
};
