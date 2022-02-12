const ZingMp3 = require('zingmp3-api-full');

async function Playlist (req, res){
    try {
        const response = await ZingMp3.getSong(req.body.id)
        if(!response.data.err){
            const data = response.data.data;
            return res.status(200).json({success: true, data})
        }
    } catch (error) {
        
    } 
}

module.exports = Playlist;