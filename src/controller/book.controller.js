const express = require('express');
const Book = require('../model/Book.model');

const app = express.Router();

app.get('/', async(req, res) =>{
    try{
    const books = await Book.find();
    res.send(books);
    }
    catch(e){
        return e;
    }
});

app.post('/insert', async(req, res) =>{
    try{
    const books = await Book.create(req.body);
    res.send(books);
    }
    catch(e){
        return e;
    }
});

module.exports = app;
