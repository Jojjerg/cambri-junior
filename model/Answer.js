const mongoose = require('mongoose')
const Schema = require('mongoose')

const answerSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    question: { type: Schema.Types.ObjectId, ref: 'Question' },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Answer', answerSchema)
