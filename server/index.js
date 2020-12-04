// import express from 'express'
// import bodyParser from 'body-parser'
// import mongoose from 'mongoose'
// import cors from 'cors'

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/posts', require('./routes/posts.js'))
const CONNECTION_URL = 'mongodb+srv://markus:120382m@cluster0.moij7.mongodb.net/memories?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

async function start() {
    try {
        await mongoose.connect(CONNECTION_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        app.listen(PORT, () => console.log(`App has been started on port: ${PORT}...`))
    } catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}
start()

mongoose.set('useFindAndModify', false)