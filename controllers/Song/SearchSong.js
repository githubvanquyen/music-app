const ZingMp3 = require('zingmp3-api-full');
const axios = require('axios');
async function SearchSong (req, res){
    try {
        const response = await axios.get(`http://ac.mp3.zing.vn/complete?type=artist,song,key,code&num=500&query=${req.body.name}`)
        if(response.data.result){
            const data = response.data.data[0].song
            return res.status(200).json({success: true,data})
        }
        res.status(400).json({success: false,message:'khong tim duoc bai hat'})
    } catch (error) {
        res.status(400).json({success: false,message:error.message})
    }
}

module.exports = SearchSong;