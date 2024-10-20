const express = require("express");
const router = express.Router();

const {
    registerUser,
    loginUser,
    getMe

} = require('../controlers/userControler')
const { protect } = require('../middleware/authMiddlware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router