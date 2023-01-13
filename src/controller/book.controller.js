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

app.get('/:name', async(req, res)=>{
    try{
        const result = await Book.find({title:req.params.name});
        res.send(result);
    }
    catch(e){
        return e;
    }
})

app.get('/:id', async(req, res)=>{
    try{
        const result = await Book.find(req.params.id);
        res.send(result);
    }
    catch(e){
        return e;
    }
})


app.delete('/delete/:id', async(req, res)=>{
    try{
        const deletedAuthor = await Book.findByIdAndDelete(req.params.id);
        res.send(deletedAuthor);
    }
    catch(e){
        return e;
    }
})

module.exports = app;
