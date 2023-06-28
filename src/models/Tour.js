const mongoose = require("mongoose");

const TourSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    quentity: {
        type: Number,
        required: true,
    },
    flight: {
        type: String,
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    whatsappContact: {
        type: String,
        required: true
    },
    telegramContact: {
        type: String,
        required: true
    }
});


const Tour = mongoose.model('Tour', TourSchema);

module.exports = Tour;
