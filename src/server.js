const express = require('express');
const cors = require('cors');
const  connect  = require('./config/config.db');
const bookRouter = require('./controller/book.controller');
const authorRouter = require('./controller/author.controller');
const discountRouter = require('./controller/discount.controller');
const port = process.env.DB_PORT || 5001;
const app = express();

//app.use(cors);
app.use(express.json());
app.use('/book',bookRouter);
app.use('/author',authorRouter);
app.use('/discount',discountRouter);

app.listen(port, async ()=>{
    await connect();
    console.log(`listening on port: ${port}`);
})