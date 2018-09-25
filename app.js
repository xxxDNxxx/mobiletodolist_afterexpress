const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const todo = require('./todo.js');
var port = process.env.PORT || 3233; //พอร์ทในการรัน
var cors = require('cors')

app.use(cors())                                  //**
app.use(bodyParser.urlencoded({extended:true})); //สร้างเว็บเซิร์ฟเวอร์
app.use(bodyParser.json());                      //**
app.use('/todo',todo); //เรียกapiมาหน้าแรก

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
