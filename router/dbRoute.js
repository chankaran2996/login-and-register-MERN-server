// Importing express
import express from "express";

// importing all controlles
import {
  addQustion,
  qustionsView,
  qustion,
  validate,
  validateConvert,
} from "../controllers/dbcontroller.js";

// creating new router object
const dbRoute = express.Router();

// POST method
dbRoute.post("/mysql/addqustion", addQustion);

// GET method
dbRoute.get("/mysql/qustionsView", qustionsView);

dbRoute.post("/mysql/qustion", qustion);

dbRoute.post("/mysql/validate", validate);

dbRoute.post("/mysql/validateConvert", validateConvert);

export default dbRoute;
