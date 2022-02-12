const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next)=>{
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];
    if(!token)
        return res.status(401).json({success:false, message:"token khong ton tai"})
    try {
        const decode = jwt.verify(token,'hsdgfjhasaighiuar')
        req.userId = decode.userId
        next()
    } catch (error) {
        console.log(error);
        return res.status(403).json({success:false, message:"token khong hop le"})
    }      
}

module.exports = verifyToken;