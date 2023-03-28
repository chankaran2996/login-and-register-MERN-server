// Importing express 
import express from "express";

// importing all controlles
import { addQustion , qustionsView } from "../controllers/dbcontroller.js";

// creating new router object
const dbRoute = express.Router();

// POST method 
dbRoute.post('/mysql/addqustion',addQustion );

// GET method
dbRoute.get('/mysql/qustionsView',qustionsView);

export default dbRoute ;