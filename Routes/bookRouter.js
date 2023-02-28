//import express
const express = require('express');
// import mongoose
const mongoose = require('mongoose');
//import express-validator
const { body, param,query } = require('express-validator');
// import express router
const router = express.Router();

// import book controller
const bookController = require('./../Controller/bookController');

// import book validator
const bookValidator = require('./../Validation/bookValidator');

// import validatemw
const validatemw = require('./../Validation/validatemw');
// get all books
router.route('/books')
    .get(bookController.getAllBooks)
    .post(bookValidator.postValidator,validatemw,bookController.addBook)

// get book by id
router.route('/books/:id')
    .get(bookValidator.getBookByIdValidator,validatemw,bookController.getBookById)
    .put(bookValidator.updateBookByIdValidator,validatemw,bookController.updateBookById)
    .delete(bookValidator.deleteBookByIdValidator,validatemw,bookController.deleteBookById)

// get book by category
router.route('/books/category/:category')
    .get(bookValidator.getBookByCategoryValidator,validatemw,bookController.getBookByCategory)

// get book by auther
router.route('/books/auther/:auther')
    .get(bookValidator.getBookByAutherValidator,validatemw,bookController.getBookByAuther)


// get book by title
router.route('/books/title/:title')
    .get(bookValidator.getBookByTitleValidator,validatemw,bookController.getBookByTitle)


// get book by publisher
router.route('/books/publisher/:publisher')
    .get(bookValidator.getBookByPublisherValidator,validatemw,bookController.getBookByPublisher)

// export router
module.exports = router;
