require('dotenv').config()
const express = require('express')
const sequalize = require('./db')

const PORT = process.env.PORT || 4999

const app = express()

const start = async () => {
    try {
        await sequalize.authenticate()
        await sequalize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (error) {
    }
}

start()