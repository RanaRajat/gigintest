const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
   book_id: {type: String, required: true},
   title: {type: String, required: true},
   author_id: {type: String, required: true},
   publisher: {type: String, required: true},
   publisher_date: {type: Date},
   category: {type: String},
   Price: {type: Number},
   sold_count: {type: Number},
   book_img_link: {type: String},
})

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
