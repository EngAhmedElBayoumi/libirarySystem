

// import mongoose
const mongoose = require('mongoose');

// create a schema for member that contain fullName, email,password, image,phoneNumber,birthdate,fullAddress and createdAt
const memberSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    fullAddress: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
});

// export memberschema
mongoose.model('member', memberSchema);
