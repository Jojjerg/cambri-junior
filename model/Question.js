const mongoose = require('mongoose')
const { Schema } = mongoose;

const questionSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    lesson: { type: Schema.Types.ObjectId, ref: 'Lesson' },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Question', questionSchema)
