const postMessage = require('../models/postMessage.js')

const createPost = async (req, res) => {

    const post = req.body

    const newPost = new postMessage(post)

    try {

        await newPost.save()

        res.status(201).json(newPost)
    } catch (e) {
        res.status(409).json({ message: e.message })
    }
}

module.exports = createPost