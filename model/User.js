const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Создаем схему пользователя
 const UserSchema = new Schema({
     name: {
        type: String,
        required: true
     },
     surname: {
        type: String,
        required: true
     },
     username: {
        type: String,
        required: true,
        unique: true
     },
     email: {
        type: String,
        required: true,
        unique: true
     },
     password: {
        type: String,
        required: true
     },
     date: {
        type: Date,
        default: Date.now
     },
     payed: {
        type: Boolean,
        default: false,
     },
     payed_date: {
        type: Date
     },
     role: {
        type: String,
        default: 'User'
     },
     avatar: {
        type: String,
     }
 })

module.exports = mongoose.model('user', UserSchema)
