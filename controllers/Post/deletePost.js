const Post = require('../../models/Post')

async function deletePost(req, res){
    const id = req.params._id;
    try {
        await Post.deleteOne({_id: id})
        return res.status(200).json({success: true, message:' da xoa bai dang'})
    } catch (error) {
        return res.status(400).json({success: false, message:'xoa that bai'}) 
    }
}

module.exports = deletePost;