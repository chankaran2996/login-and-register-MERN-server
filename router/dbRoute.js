// Importing express 
import express from "express";

// importing all controlles
import { addQustion } from "../controllers/dbcontroller.js";

// creating new router object
const dbRoute = express.Router();

// POST method 
dbRoute.post('/mysql/addqustion',addQustion );

export default dbRoute ;