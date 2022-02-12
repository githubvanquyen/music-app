const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const saltRounds = 10;
async function Login(req, res){
    const{username, password} = req.body;
    if(!username || !password )
        return res.status(400).json({success:false, message:"Thieu username hoac password"})
    try {
        const user = await User.findOne({username})
        if(user){
            const checkPassword = await bcrypt.compare(password,user.password);
            if(checkPassword){
                const accessToken = jwt.sign({userId: user._id},'hsdgfjhasaighiuar');
                return res.status(200).json({success:true, message:"dang nhap thanh cong!!",accessToken});
            }
            return res.status(401).json({success:false, message:"sai username hoac password"});
        }
        return res.status(401).json({success:false, message:"sai username hoac password"});
    } catch (error) {
        return res.status(500).json({success:false, message:"error: "+ error.message})
    }
}

module.exports = Login;
