// import mongoose
const mongoose = require('mongoose');

// import bookSchema
require('../Model/bookModel');

// book schema
const bookschema =mongoose.model('book');


// create a function to get all books
exports.getAllBooks = (request, response,next) => {
    bookschema
        .find({})
        .then((books) => {
            response.status(200).json({ data: books });
        }
        )
        .catch((error) => next(error))
}

// create a function to get book by id
exports.getBookById = (request, response) => {
    bookschema
        .findById(request.params.id)
        .then((book) => {
            response.status(200).json({ data: book });
        }
        )
        .catch((error) => next(error))
}

// create a function to add book

exports.addBook = (request, response) => {
    new bookschema({
        _id:request.body.ID,
        category: request.body.category,
        auther: request.body.auther,
        title: request.body.title,
        publisher: request.body.publisher,
        publishingDate: request.body.publishingDate,
        edition: request.body.edition,
        pages: request.body.pages,
        shelfNo: request.body.shelfNo,
        noOfCopies: request.body.noOfCopies,
    })
        .save()
        .then((book) => {
            response.status(201).json({ data: book });
        }
        )
        .catch((error) => next(error))
}

// create a function to update book by id

exports.updateBookById = (request, response) => {
    bookschema
    .updateOne
    (
        {_id:request.params.id},
        {
            $set:
            {
                category: request.body.category,
                auther: request.body.auther,
                title: request.body.title,
                publisher: request.body.publisher,
                publishingDate: request.body.publishingDate,
                edition: request.body.edition,
                pages: request.body.pages,
                shelfNo: request.body.shelfNo,
                noOfCopies: request.body.noOfCopies,
            }
        }
    
    )
    .then((book) => {
        response.status(200).json({ data: book });
    }
    )
    .catch((error) => next(error))
}

// create a function to delete book by id

exports.deleteBookById = (request, response) => {
    bookschema
        .deleteOne({_id:request.params.id})
        .then((book) => {
            response.status(200).json({ data: book });
        }
        )
        .catch((error) => next(error))
}

// create a function to get book by category

exports.getBookByCategory = (request, response) => {
    bookschema 
        .find({category:request.params.category})
        .then((book) => {
            response.status(200).json({ data: book });
        }
        )
        .catch((error) => next(error))
}

// create a function to get book by auther

exports.getBookByAuther = (request, response) => {
    bookschema 
        .find({auther:request.params.auther})
        .then((book) => {
            response.status(200).json({ data: book });
        }
        )
        .catch((error) => next(error))
}

// create a function to get book by title

exports.getBookByTitle = (request, response) => {
    
    bookschema 
        .find({title:request.params.title})
        .then((book) => {
            response.status(200).json({ data: book });
        }
        )
        .catch((error) => next(error))
    }

// create a function to get book by publisher

exports.getBookByPublisher = (request, response) => {
    bookschema
        .find({publisher:request.params.publisher})
        .then((book) => {
            response.status(200).json({ data: book });
        }
        )
        .catch((error) => next(error))
}

