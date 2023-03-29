// Importing express
import express from "express";
// Improting cors which handile cors policies
import cors from "cors";
// Importing morgan
import morgan from "morgan";
// Importing dotenv
import dotenv from "dotenv";
dotenv.config();
// imporing DB connection
import connectDB from "./database/connection.js";
// importing route connection
import route from "./router/route.js";
import dbRoute from "./router/dbRoute.js";

import authenticationMiddleware from "./middlewares/authMiddleware.js";
// Creating object for expresss
const app = express();
// For allowing other orgin
app.use(cors());
//  It parses incoming requests with JSON payloads and is based on body-parser
app.use(express.json());

app.use(morgan("tiny"));
app.disable("x-powered-by");

// creating responce for home routs
app.get("/", (req, res) => {
  res.status(200).json("Sucessfully connected");
});

// connecting with api route
app.use("/api", route);

app.use("/db", authenticationMiddleware, dbRoute);

// connnection
const startserver = async () => {
  await connectDB();
  //  starting server
  app.listen(process.env.PORT, () => {
    console.log(`Server Rur at ${process.env.PORT}`);
  });
};
startserver();