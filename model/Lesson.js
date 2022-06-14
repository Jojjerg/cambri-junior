const mongoose = require('mongoose')
const Schema = require('mongoose')

const lessonSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        default: 0,
        min: 0, max: 10
    },
    done: {
        type: Boolean,
        default: false
    },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Lesson', lessonSchema)
