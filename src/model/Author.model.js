const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
author_id: {type: String, required :true},
name:{type: String, required: true},
phone: {type: Number, required: true},
birth: {type: String},
death: {type: String},
author_img_link: {type: String},
})

const Author = mongoose.model('Author', authorSchema);
module.exports = Author;
