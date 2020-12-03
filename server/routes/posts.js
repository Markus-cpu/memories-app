const express = require('express')

const router = express.Router()

// http://localhost:5000/posts (endpoint)
router.get('/', require('../controllers/getPosts.js'))
router.post('/', require('../controllers/createPost.js'))

module.exports = router