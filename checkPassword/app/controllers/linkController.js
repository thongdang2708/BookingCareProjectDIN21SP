const pool = require('../../model/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
app.use(cookieParser());
require('dotenv').config();


class linkClass {

    showLogin(req,res) {
        res.render('login')
    }

    showRegister(req,res) {
        res.render('register')
    }

    async getUsers (req,res) {
        
        let { rows } = await pool.query("Select username, email from account");

        res.status(200).json(rows);


    }


    async register(req,res) {

        let { username, password, password_repeat, firstname, lastname, location, phone, email } = req.body;

        let passwordCheck = password.length < 6 ? '' : password;
        let passwordRepeat = password_repeat < 6 ? '' : password_repeat;
        console.log(passwordCheck);

        let { rows } = await pool.query("Select username from account where username = $1 or email = $2",[username,email]);

        if (rows.length) {
            console.log('This username or email already existed!')
        } else {

            if (passwordCheck.length < 6) {
                console.log('No insertion')
            } else if (passwordCheck !== passwordRepeat) {
                console.log('No insertion again!')
            } else {
                let salt = await bcrypt.genSalt(10);

                let hassedPassword = bcrypt.hash(password, salt, async (err, hash) => {
                if (err) {
                    

                    console.log('error');
                } else {
                    console.log(username);
                    console.log(hash);
                    pool.query(`INSERT INTO account (username,password,first_name,last_name,location,phone_number,email) values ('${username}','${hash}', '${firstname}','${lastname}','${location}','${phone}','${email}')`, (err,result) => {
                        if (err) {
                            console.log('error');
                        } else {
                            res.render('register', {message : 'Created successfully!'})
                        }
                    });
    
                }



            }); 
            }
        }  
       
    }

    async login (req,res) {

        let {  username, password } = req.body;

        let { rows } = await pool.query("Select * from account where username = $1",[username]);


        if (!rows.length) {
            return res.status(400).send('invalid!');
        } else {
            
            try {
                if (await bcrypt.compare(password,rows[0].password)) {
                    
                    let user =  { name : rows[0].username, id : rows[0].account_id};
                    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,{expiresIn: "7d"});
                   
                    await pool.query('Update account set last_login = now() where username = $1',[rows[0].username]);
                    res.cookie('token',token,{...(process.env.COOKIE_DOMAIN && {domain: process.env.COOKIE_DOMAIN}) , httpOnly: true,sameSite: 'none', secure: true});
                    return res.redirect('/success');
                } else {
                    return res.status(200).send('Not allowed!');
                }


            }

             catch (err) {
                console.log(err);
            }
           








        }
       
    }

    async getId (req,res) {

        let id = req.params.id;

        let { rows } = await pool.query("Select * from account where account_id = $1",[id]);

        if (!rows.length) {
            return res.status(400).send({
                message : 'Message responds fail!'
            })
        } else {
            return res.status(200).json(rows);
        }
    }

}

module.exports = new linkClass;