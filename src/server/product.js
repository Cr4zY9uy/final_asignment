const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({
    product_id: Number,
    title: String,
    price: String,
    description: String,
    qty: Number,
    weight: Number,
    thumbnail: String,
    category_id: Number
})
module.exports = mongoose.model("products", product_schema);