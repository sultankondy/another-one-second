const mongoose = require('mongoose');

const NavigationSChema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    }
});


const Navigation = mongoose.model('Navigation', NavigationSChema);

module.exports = {
    Navigation
}