const express = require('express');
const Discount = require('../model/Discount.model');

const app = express.Router();

app.get('/', async(req, res) =>{
    try{
    const discounts = await Discount.find();
    res.send(discounts);
    }
    catch(e){
        return e;
    }
});

app.post('/insert', async(req, res) =>{
    try{
    const discounts = await Discount.create(req.body);
    res.send(discounts);
    }
    catch(e){
        return e;
    }
});

module.exports = app;
