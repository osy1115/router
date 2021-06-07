const express = require('express');
const app = express()
const main = require('./routers/board/board')
const board = require('./routers')
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

app.set('view enigne','html')
nunjucks.configure('views',{
    express:app,
})
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',main);
app.use('/board',board)

app.get('/')

app.listen(3000,()=>{
    console.log(`server start port 3000`)
})