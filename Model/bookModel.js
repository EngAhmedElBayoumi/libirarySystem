// import mongoose
const mongoose = require('mongoose');


// create a schema for book 
const bookSchema = new mongoose.Schema({
    ID: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    auther: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    PublishingDate: {
        type: Date,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Edition: {
        type: String,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    NoOfCopies: {
        type: Number,
        required: true
    },
    Avilable: {
        type: Number,
        required: true
    },
    shelfNo: {
        type: Number,
        required: true
    }
});

// export bookschema
mongoose.model('book', bookSchema);
