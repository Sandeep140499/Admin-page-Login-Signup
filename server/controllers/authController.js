const User = require('../models/user')
// import Login from './../../client/src/pages/Login';
const {  hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken')
// const Login


const test = (req,resp) => {
    resp.json('Welcome to Mongodb World')
}

const registerUser = async (req,resp) => {

    try {
        const {name, email, password} = req.body;
        // check the everythings enters correctly
        if(!name){
            return resp.json({
                error: 'name is required'
            })
        };
        // check password is ok
        if(!password || password < 6){
            return resp.json({
                error: 'Password is required and sjould be atlist 6 charatecter at 6 word'
            })
        };
        // check the email 
        const exist = await User.findOne({email});
        if (exist) {
           return resp.json({ 
            error: 'Email is alrady taken'
           })
        }

        const hashedPassword = await hashPassword(password)
        //create  user in database
        const user = await User.create(
          {
            name, 
            email, 
            password: hashedPassword,       
           })
          return resp.json(user)
        } catch (error) {
        console.log(error);
        }
    };
    // LOGIN ENDPOINTS
    const loginUser = async (req, resp)=>{
        try {
            const {email ,password} = req.body;
            // check if user exists
            const user = await User.findOne({email});
            if(!user){
                return resp.json({
                    error: 'No user found'
                })
            }

            // check a password match

            const match  = await comparePassword(password, user.password)
            if(match){
                // resp.json('Password Match')
                jwt.sign({ email: user.email,  id: user._id, name: user.name },process.env.JWT_SECRET, {} , (err, token) =>{
                    if(err) throw err
                    resp.cookie('token' ,token).json(user)
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getProfile = (req, resp) =>{
        const {token} = req.cookies 
        if(token){
            jwt.verify(token, process.env.JWT_SECRET, {} , (err ,user)=>{
                if(err) throw err;
                resp.json(user)
            })
        }else{
            resp.json(null)
        }
    }

module.exports = {
    test ,registerUser ,loginUser , getProfile     
}
