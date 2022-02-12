const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Song = new Schema({
    name:{
        type:String,
        required: true
    },
    source:{
        data: Buffer,
        contentType:String
    }
})

module.exports = mongoose.model('songs',Song)