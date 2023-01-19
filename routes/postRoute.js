const express = require('express')
const router = express.Router()
const {savePost} = require('../controllers/postController')

router.route('/newpost').post(savePost)

module.exports = router