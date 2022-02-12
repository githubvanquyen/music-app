const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    content :{
        type:String,
        require: true,
    },
    image :{
        type: Buffer,
    },
    user:{
        type: Schema.Types.ObjectID,
        ref:'users',
    },
    
},{timestamps:true})
module.exports = mongoose.model('posts', Post );