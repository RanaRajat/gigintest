const mongoose = require('mongoose');

const discountSchema = new mongoose.Schema({
book_id: {type: String, required:true},
discount_percentage: {type: Number, required:true}
})

const Discount = mongoose.model('Discount', discountSchema);
module.exports = Discount;
