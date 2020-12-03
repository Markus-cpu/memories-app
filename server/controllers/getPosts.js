const postMessage = require('../models/postMessage.js')

const getPosts = async (req, res) => {
    try {
        const postMessages = await postMessage.find()

        res.status(200).json(postMessages)
    } catch(e) {
        res.status(404).json({ message: e.message })
    }
}

module.exports = getPosts