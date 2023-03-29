// Importing model for schema
import User from "../models/userModel.js";
import generateToken from "../config/generateToken.js";

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
  const generateRandomString = (l) => {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charactersLength = characters.length;
    for (let i = 0; i < l; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  const databaseName = [
    generateRandomString(6),
    generateRandomString(6),
    generateRandomString(6),
  ];
  const tableName = [
    generateRandomString(5),
    generateRandomString(5),
    generateRandomString(5),
  ];
  //   Creating user
  const user = await User.create({
    name,
    email,
    password,
    databaseName,
    tableName,
    pic,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("failed to create");
  }
};

export const login = async (req, res) => {
  // Spliting data from req.bady to multiple varibles
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      // pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("invalid email id or password");
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
