const express = require("express")
const app = express()
const cors=require('cors')
const mongoose = require("mongoose")
const user = require('./userModel.js')

app.use(cors())
app.use(express.json())

const connectionParams={
    useCreateIndex: true, 
    useFindAndModify: false, 
    useNewUrlParser: true, 
    useUnifiedTopology: true
}
mongoose.connect('mongodb+srv://chan2996:chan2996@cluster0.zfadu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

app.post('/api/register', async (req,res) => {
    console.log(req.body)
    try {
        const users = await user.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })
        res.json({status:'ok'})
    } catch (error) {
        res.json({status:'error',error:error})
    }
    
})

app.post('/api/login', async (req,res) => {
    const user = await user.findOne({
        email:req.body.email,
        password:req.body.password
    })
    if(user){
        return res.json({status:'ok' , user:true})
    }
    else{
        return res.json({status:'error' , user:false})
    }
})

app.listen(5000 ,() =>{
    console.log("sever sarted at 5000")
})