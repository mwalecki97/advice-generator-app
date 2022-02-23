const mongoose = require('mongoose');

const adviceSchema = mongoose.Schema({
    id: {
        type: Number
    },
    content: {
        type: String
    }
})

module.exports = mongoose.model('Advice', adviceSchema)