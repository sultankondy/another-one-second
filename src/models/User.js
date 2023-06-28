const mongoose = require('mongoose');

const UserShcema = new mongoose.Schema(
    {
        username: {type: String, required: true, unique: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        firstName: { type: String },
        lastName: { type: String },
        phoneNumber: {type: Number, required: true},
        isAdmin: {
            type: Boolean,
            default: false
        },
    }, {timestamps: true}
);

module.exports = mongoose.model("User", UserShcema);
