const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken')
const createPostController = require('../controllers/Post/createPost');
const updatePostController = require('../controllers/Post/updatePost');
const deletePostController = require('../controllers/Post/deletePost');
const readPostController = require('../controllers/Post/readPost');

router.post('/create',verifyToken, createPostController);
router.put('/update/:_id',verifyToken, updatePostController);
router.delete('/delete/:_id',verifyToken, deletePostController);
router.get('/',verifyToken, readPostController);

module.exports = router;