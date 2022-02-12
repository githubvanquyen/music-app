const Post = require('../../models/Post');
async function readPost(req,res){
    try {
        const posts = await Post.find({user: req.userId});
        res.status(200).json({success: true, message:'cac bai dang',posts})
    } catch (error) {
        res.status(400).json({success: false, message: error.message})
    }
}

module.exports = readPost;