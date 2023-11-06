const mongoose=require("mongoose");
const orderdetail_schema=new mongoose.Schema({
    orderdetail_id:Number,
    order_id:Number,
    product:[{
        
    }]

});
module.exports=mongoose.model("orderdetails",orderdetail_schema);