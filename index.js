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
// const user = require('./userModel.js')
// Creating object for expresss
const app = express();
// For allowing other orgin
app.use(cors());
//  It parses incoming requests with JSON payloads and is based on body-parser
app.use(express.json());

app.use(morgan("tiny"));
app.disable("x-powered-by");

// connnection
connectDB();

// creating responce for home routs
app.get("/", (req, res) => {
  res.status(200).json("Sucessfully connected");
});

// connecting with api route
app.use("/api", route);

app.use("/db", dbRoute);

//  starting server
app.listen(8000, () => {
  console.log("sever sarted at 8000");
});

// const connectionParams={
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }
// mongoose.connect('mongodb+srv://chan2996:chan2996@cluster0.zfadu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then( () => {
//         console.log('Connected to database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//     })

// app.post('/api/register', async (req,res) => {
//     console.log(req.body)
//     try {
//         const users = await user.create({
//             name:req.body.name,
//             email:req.body.email,
//             password:req.body.password
//         })
//         res.json({status:'ok'})
//     } catch (error) {
//         res.json({status:'error',error:error})
//     }

// })

// app.post('/api/login', async (req,res) => {
//     const user = await user.findOne({
//         email:req.body.email,
//         password:req.body.password
//     })
//     if(user){
//         return res.json({status:'ok' , user:true})
//     }
//     else{
//         return res.json({status:'error' , user:false})
//     }
// })

// app.listen(5000 ,() =>{
//     console.log("sever sarted at 5000")
// })
