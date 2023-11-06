const mongoose=require("mongoose");
const favourite_schema=new mongoose.Schema({
    product_id: Number,
    title: String,
    price: String,
    description: String,
    qty: Number,
    weight: Number,
    thumbnail: String,
    category_id: Number,
    user_id:Number
});

module.exports=mongoose.model("favourite",favourite_schema);