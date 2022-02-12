const Post = require('../../models/Post')

async function updatePost(req, res){
    const {content, image, userId} = req.body;
    const id = req.params._id;
    if(!content){
        return res.status(400).json({success: false, message:'chua dien noi dung bai dang'})
    }
    try {
        const update = {
            content,
            image,
            user: userId,
        }
        await Post.updateOne({_id: id},update)
        return res.status(200).json({success: true, message:' da cap nhat bai dang'})
    } catch (error) {
        return res.status(400).json({success: false, message:'cap nhat that bai'}) 
    }
}

module.exports= updatePost;