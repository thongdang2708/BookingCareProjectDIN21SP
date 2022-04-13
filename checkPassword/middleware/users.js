const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {

    // isLoggedIn : (req,res,next) => {
    //     // const authHeader = req.headers['authorization'];

    //     // const token = authHeader && authHeader.split(' ')[1];

    //     // if (token == null) return res.sendStatus(401).send('unsuccessfully!');

    //     // jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user) => {
    //     //     if (err) return res.sendStatus(403);
    //     //     req.user = user;
    //     //     next();
    //     // })
    //     try {
    //         const authHeader = req.headers;

    //         res.json(authHeader);
           
            

    //         // next();
    //     } catch (err) {
            
    //         return res.status(400).send({
    //             message : 'Your session is not valid!'
    //         })
    //     }

    // }


}
 