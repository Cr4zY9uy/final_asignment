const mongoose = require("mongoose");
const user_schema = new mongoose.Schema({
    user_id: Number,
    fullname: String,
    email: String,
    password: String
})
module.exports = mongoose.model("users", user_schema);