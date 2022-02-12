const ZingMp3 = require('zingmp3-api-full');

async function PlaySong (req, res){
    try {
        const response = await ZingMp3.getSong(req.body.id)
        if(!response.data.err){
            const data = response.data;
            try {
                const infoSong = await ZingMp3.getInfoSong(req.body.id)
                return res.status(200).json({success: true, data, infoSong})
            } catch (error) {
                return res.status(400).json({success: false, message:'khong tim duoc thong tin bai hat'})
            }
        }
        return res.status(400).json({success: false, message:'khong tim duoc bai hat'})
    } catch (error) {
        res.status(400).json({success: false, message: error.message})
    } 
}

module.exports = PlaySong;