const express = require('express');
const router = express.Router();
const linkController = require('../app/controllers/linkController')
const middleware = require('../middleware/users');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const app = express();
app.use(cookieParser());
require('dotenv').config();

router.get('/login',linkController.showLogin);
router.get('/register',linkController.showRegister);
router.post('/post/register',linkController.register);
router.get('/username',linkController.getUsers);
router.post('/login', linkController.login);
router.get('/success', function (req,res) {
    const refreshToken = req.headers.cookie;
    
    let token = refreshToken.split('=')[1];

    const verifiedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);

    let name = verifiedToken.name;

    let id = verifiedToken.id;

    res.render('success', {name : name, id : id})
})

router.get('/booking', function (req,res) {
        res.render('booking');
})

router.get('/form', function (req,res) {
    res.render('form');
}) 

router.get('/user/:id', linkController.getId);

router.post('/booked', function (req,res) {
    console.log(req.body);
    res.render('booked');
})

router.get('/checkform', function (req,res) {
    res.render('checkBox');
})

router.post('/submit',function (req,res) {
    console.log(req.body);
})

router.get('/post/register', function (req,res) {
    res.render('register')
})
module.exports = router;