const express = require('express');
const Author = require('../model/Author.model');

const app = express.Router();

app.get('/', async(req, res) =>{
    try{
    const authors = await Author.find();
    res.send(authors);
    }
    catch(e){
        return e;
    }
});

app.post('/insert', async(req, res) =>{
    try{
    const authors = await Author.create(req.body);
    res.send(authors);
    }
    catch(e){
        return e;
    }
});

app.get('/:name', async(req, res)=>{
    try{
        const result = await Author.find({name:req.params.name});
        res.send(result);
    }
    catch(e){
        return e;
    }
})

app.delete('/delete/:id', async(req, res)=>{
    try{
        const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
        res.send(deletedAuthor);
    }
    catch(e){
        return e;
    }
})

app.get('/:id', async(req, res)=>{
    try{
        const result = await Author.find({name:req.params.id});
        res.send(result);
    }
    catch(e){
        return e;
    }
})


module.exports = app;
