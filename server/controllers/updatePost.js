const mongoose = require('mongoose')
const postMessage = require('../models/postMessage.js')

const updatePost = async (req, res) => {
    const { id: _id } = req.params
    const post = req.body

    if(mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No post with that id...')
    }
    const updatedPost = await postMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true})
    await res.json(updatedPost)
}

module.exports = updatePost