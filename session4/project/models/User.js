const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18,
        max: 55,
        required: true
    },
    empId: {
        type: Number,
        unique: true,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);
