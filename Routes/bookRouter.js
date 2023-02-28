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


// get all books
router.route('/books')
    .get(bookController.getAllBooks)
    .post(bookController.addBook)

// get book by id
router.route('/books/:id')
    .get(bookController.getBookById)
    .put(bookController.updateBookById)
    .delete(bookController.deleteBookById)

// get book by category
router.route('/books/category/:category')
    .get(bookController.getBookByCategory)

// get book by auther
router.route('/books/auther/:auther')
    .get(bookController.getBookByAuther)


// get book by title
router.route('/books/title/:title')
    .get(bookController.getBookByTitle)


// get book by publisher
router.route('/books/publisher/:publisher')
    .get(bookController.getBookByPublisher)

// export router
module.exports = router;
