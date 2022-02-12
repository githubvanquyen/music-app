const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//init variable bcrypt
const saltRounds = 10;


async function Register(req, res){
    const {username, email, password} = req.body;
    if(!username || !email || !password)
        return res.status(400).json({success: false, message:"chua dien usernam, email hoac password!!"});
    else{
        try {
            const user = await User.findOne({username: username});
            if(!user){
                const hashPassword = await bcrypt.hash(password,saltRounds);
                const newUser = new User({
                    username,
                    email,
                    password: hashPassword
                })
                await newUser.save()
                const accessToken = jwt.sign({userId: newUser._id},'hsdgfjhasaighiuar');
                return res.status(200).json({success: true, message:"tao tai khoan thanh cong",accessToken})
            }
            return res.status(400).json({success: false, message:"tai khoan da ton tai"})
        } catch (error) {
            return res.status(500).json({success: false, message:"eror :"+ error.message})
        }
    }
}

module.exports = Register;