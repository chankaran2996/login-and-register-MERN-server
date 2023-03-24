import { Router } from "express";

const route = Router();


// GET metods
Router.route('/user/:username').get((req,res) => {
    res.json(" success");
});

Router.route('/generateOTP').get((req,res) => {
    res.json(" success");
});

Router.route('/verfiyOTP').get((req,res) => {
    res.json(" success");
});

Router.route('/createReset').get((req,res) => {
    res.json(" success");
});



// POST methods

Router.route('/register').post((req,res) => {
    res.json("register success");
});

Router.route('/registerMail').post((req,res) => {
    res.json("registerMail success");
});

Router.route('/authenticate').post((req,res) => {
    res.json("authenticate success");
});

Router.route('/login').post((req,res) => {
    res.json("login success");
});

// PUT methods




export default route;