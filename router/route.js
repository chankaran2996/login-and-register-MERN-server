import { Router } from "express";

const route = Router();


// GET metods

// user with username
Router.route('/user/:username').get((req,res) => {
    res.json(" success");
});

// To generate random OTP
Router.route('/generateOTP').get((req,res) => {
    res.json(" success");
});

// For verfiy OTP 
Router.route('/verfiyOTP').get((req,res) => {
    res.json(" success");
});

// rest all varabiles 
Router.route('/createReset').get((req,res) => {
    res.json(" success");
});



// POST methods

// For updating user data
Router.route('/updateUser').post((req,res) => {
    res.json("register success");
});

// for sending mail
Router.route('/registerMail').post((req,res) => {
    res.json("registerMail success");
});

// for autherntication 
Router.route('/authenticate').post((req,res) => {
    res.json("authenticate success");
});

// for login 
Router.route('/login').post((req,res) => {
    res.json("login success");
});

// PUT methods

Router.route('/updateUser').put((req,res) => {
    res.json("login success");
});

Router.route('/resetPassword').put((req,res) => {
    res.json("login success");
});


export default route;