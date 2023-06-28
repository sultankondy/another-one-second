const mongoose = require('mongoose');

const UmraSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
}, {timestamps: true});

const Umra = mongoose.model("Umra", UmraSchema);

module.exports = Umra;