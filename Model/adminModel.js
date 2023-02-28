
// import mongoose
const mongoose = require('mongoose');

// create a schema for admin that contain firstName, lastName ,email, password ,birthdate, hireDate, image and salary
const adminSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
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
    birthdate: {
        type: Date,
        required: true
    },
    hireDate: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
});

// export adminschema

mongoose.model('admin', adminSchema);
