const mongoose = require("mongoose");
const orders_schema = new mongoose.Schema({
    order_id:Number,
    user_id:Number,
    user_name:String,
    total:Number,
    orderdetail_id:Number
});
module.exports = mongoose.model("orders", orders_schema);