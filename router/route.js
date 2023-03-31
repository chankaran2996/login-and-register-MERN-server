import express from "express";
const router = express.Router();
// importing all controlles

import {
  register,
  generateOTP,
  verfiyOTP,
  createReset,
  login,
  resetPassword,
  updateUser,
  accountConfirmation,
} from "../controllers/appController.js";

// GET metods

// To generate random OTP
router.get("/generateOTP", generateOTP);

router.get("/verfiyOTP", verfiyOTP);

router.get("/createReset", createReset);
// POST methods

router.post("/register", register);

// **************************************need to check ****************
// router.post("/registerMail", registerMail);
// for autherntication
// Router.route("/authenticate").post((req, res) => {
//   res.json("authenticate success");
// });

// *************************************************************************
router.post("/login", login);
// PUT methods

router.post("/updateUser", updateUser);

router.post("/account-confirmation", accountConfirmation);

router.post("/resetPassword", resetPassword);

export default router;
