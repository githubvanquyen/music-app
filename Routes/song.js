const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const songController = require('../controllers/Song/PlaySong');
const searchSongController = require('../controllers/Song/SearchSong');
const lyricSongController = require('../controllers/Song/LyricSong');

router.post('/detail-song',verifyToken,songController);
router.post('/lyric-song',verifyToken,lyricSongController);
router.post('/search-song',verifyToken,searchSongController);

module.exports = router