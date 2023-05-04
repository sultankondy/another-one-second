const mongoose = require('mongoose');

const TasbihSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    arabic: String,
    transcript: String,
    translation: String,
})

const Tasbih = mongoose.model("Tasbih", TasbihSchema);

module.exports = Tasbih;