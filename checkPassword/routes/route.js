const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config;
const pathFile = path.join(__dirname,'../public');
const linkRouter = require('./linkRoute')
app.use(express.static(pathFile))
app.set('view engine','hbs');

let route = function (app) {

        app.use(express.urlencoded({ extended:true}));
        app.use(express.json());
        app.use('/',linkRouter);
        app.use(express.static(pathFile))
        app.use(cookieParser())

}

module.exports = route;