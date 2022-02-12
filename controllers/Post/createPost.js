const Post = require('../../models/Post');

async function createPost(req, res){
    const {content, image} = req.body;
    if(!content){
        return res.status(400).json({success: false, message:'chua dien noi dung bai dang'});
    } 
    try {
        const newPost = new Post({
            content,
            image,
            user: req.userId,
        })
        await newPost.save()
        res.status(200).json({success: true, message:'bai dang da duoc tao!',newPost})
    } catch (error) {
        res.status(400).json({success: false, message:error.message})
    }

}

module.exports = createPost;