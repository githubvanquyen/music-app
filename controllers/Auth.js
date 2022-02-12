const jwt = require('jsonwebtoken');
const User = require('../models/User');
async function Auth (req, res){
    try {
        const user = await User.findById(req.userId);
        if(!user){
            return res.status(401).json({success: false, message:'xac thuc nguoi dung that bai'})
        }
        res.status(200).json({success: true, user: user._id})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})        
    }
}

module.exports = Auth;