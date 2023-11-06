const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const url_db = `mongodb+srv://anhnguyen:<KS9f$pogc3>@coffee.lwrk1sq.mongodb.net/coffee_store`
app.listen(port, function () {
    console.log("Server is running...");
})
mongoose
    .connect(url_db)
    .then(() => {
        console.log("Connecting to database...");
    })
    .catch(error => console.log(error));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(express.urlencoded({ extended: true }))
const checkAuth = (req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split("")[0] === "Bearer") {
        const token = req.headers.authorization.split('')[1];
        jwt.verify(token, 'RESTFULLAPIs', function (err, decode) {
            if (err) req.user = undefined;
            req.user = decode;
            return next();
        });
    } else {
        req.user = undefined;
        return res.status(401).json({ message: "Unauthorized user" });
    }
}
app.post("/product/add",async function(req,res){
    try{
        
    }
})