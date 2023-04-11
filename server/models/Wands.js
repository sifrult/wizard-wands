const mongoose = require('mongoose');

const { Schema } = mongoose;

const wandSchema = new Schema({
    wandType: {
        type: String,
        required: true
    },
    woodType: {
        type: String,
        required: true
    },
    url: {
        Type: String,
        required: true
    }
});

const Wand = mongoose.model('Wand', wandSchema);

module.exports = Wand;