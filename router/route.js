import express from "express";
const router = express.Router();
import {
  register,
  generateOTP,
  verfiyOTP,
  createReset,
  login,
  resetPassword,
  updateUser,
} from "../controllers/appController.js";

// importing all controlles

// GET metods

// user with username

// To generate random OTP
// Router.route("/generateOTP").get((req, res) => {
//   res.json(" success");
// });
router.get("/generateOTP", generateOTP);
// For verfiy OTP
// Router.route("/verfiyOTP").get((req, res) => {
//   res.json(" success");
// });

router.get("/verfiyOTP", verfiyOTP);
// rest all varabiles
// Router.route("/createReset").get((req, res) => {
//   res.json(" success");
// });
router.get("/createReset", createReset);
// POST methods

// For updating user data
// Router.route("/register").post((req, res) => {
//   res.json("register success");
// });
router.post("/register", register);
// for sending mail
// Router.route("/registerMail").post((req, res) => {
//   res.json("registerMail success");
// });
// **************************************need to check ****************
// router.post("/registerMail", registerMail);
// for autherntication
// Router.route("/authenticate").post((req, res) => {
//   res.json("authenticate success");
// });

// for login
// Router.route("/login").post((req, res) => {
//   res.json("login success");
// });
// *************************************************************************
router.post("/login", login);
// PUT methods

// Router.route("/updateUser").put((req, res) => {
//   res.json("login success");
// });
router.post("/updateUser", updateUser);
// Router.route("/resetPassword").put((req, res) => {
//   res.json("login success");
// });
router.post("/resetPassword", resetPassword);

export default router;
