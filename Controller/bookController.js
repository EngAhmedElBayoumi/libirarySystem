// import mongoose
const mongoose = require('mongoose');

// import bookSchema
const bookSchema = require('../Model/bookModel');

// book schema
const bookschema =mongoose.model('book');


// create a function to get all books
exports.getAllBooks = (request, response) => {
    response.status(200).json({ data:"get all book" });
}

// create a function to get book by id
exports.getBookById = (request, response) => {
    response.status(200).json({ data:"get book by id" });
}

// create a function to add book

exports.addBook = (request, response) => {
    response.status(200).json({ data:"add book" });
}

// create a function to update book by id

exports.updateBookById = (request, response) => {
    response.status(200).json({ data:"update book by id" });
}

// create a function to delete book by id

exports.deleteBookById = (request, response) => {
    response.status(200).json({ data:"delete book by id" });
}

// create a function to get book by category

exports.getBookByCategory = (request, response) => {

    response.status(200).json({ data:"get book by category" });
}

// create a function to get book by auther

exports.getBookByAuther = (request, response) => {

    response.status(200).json({ data:"get book by auther" });
}

// create a function to get book by title

exports.getBookByTitle = (request, response) => {
    
        response.status(200).json({ data:"get book by title" });
    }

// create a function to get book by publisher

exports.getBookByPublisher = (request, response) => {

    response.status(200).json({ data:"get book by publisher" });
}

// create a function to get book by publishing date

exports.getBookByPublishingDate = (request, response) => {

    response.status(200).json({ data:"get book by publishing date" });
}

// create a function to get book by edition

exports.getBookByEdition = (request, response) => {

    response.status(200).json({ data:"get book by edition" });
}

// create a function to get book by pages

exports.getBookByPages = (request, response) => {

    response.status(200).json({ data:"get book by pages" });
}

// create a function to get book by shelf no

exports.getBookByShelfNo = (request, response) => {

    response.status(200).json({ data:"get book by shelf no" });
}

// create a function to get book by no of copies

exports.getBookByNoOfCopies = (request, response) => {

    response.status(200).json({ data:"get book by no of copies" });
}
