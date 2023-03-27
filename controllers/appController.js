import User from "../models/userModel.js";

export const register = async (req, res, next) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.sendStatus(400);
    throw new Error("please enter all the fields");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } else {
    res.status(400);
    throw new Error("failed to create");
  }
};

export const login = async (req, res) => {
  res.json("login success");
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
