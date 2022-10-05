const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        fname: {type: String, required: true},
        lname: {type: String, required: true},
        username: {type: String, required: true, unique: true},
        password: {type: String, required: true},
    })

module.exports = mongoose.model('User', UserSchema)