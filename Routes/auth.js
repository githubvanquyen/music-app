const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken')
const resigterController = require('../controllers/Register')
const loginController = require('../controllers/Login');
const authController = require('../controllers/Auth');


router.post('/register',resigterController);
router.post('/login',loginController);
router.get('/',verifyToken,authController);
module.exports = router;