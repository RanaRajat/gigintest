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

module.exports = app;
