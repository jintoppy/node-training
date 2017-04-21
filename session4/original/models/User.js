const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    empId: {
        type: Number,
        unique: true,
        required: true
    },
    name: String,
    age: { type: Number, min: 18, max: 65, required: true },
});

module.exports = mongoose.model('User', UserSchema);