const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema = new Schema({
    title: {type: String, required: true},
    timestamp: {type: Date},
    content: {type: String, required: true},
    createdBy: {type: Schema.Types.ObjectId, ref: 'User', required: true}   
})


module.exports = mongoose.model('Message', MessageSchema)