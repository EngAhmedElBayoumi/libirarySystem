// import express
const express = require('express');
// import mongoose
const mongoose = require('mongoose');
//import cors
const cors = require('cors')


//import routes

const bookRouter = require('./Routes/bookRouter');
// create server 
const app = express();





mongoose.set('strictQuery', true);
// Connect to the database on locolhost->127.0.0.1 on port 27017 
mongoose.connect('mongodb://127.0.0.1:27017/libirarysystem')
.then(() => {
    console.log('Connected to the database');
    // Start the server on port 8080
    app.listen(8080, () => {
      console.log('Server listening on port 8080');
    });  
  })
  .catch((error) => {
    console.log('Error connecting to the database'+error);
  });

// Middleware for enabling CORS
app.use(cors());


// Middleware for parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//use Routes
app.use(bookRouter);



// Middleware for handling non-existent routes
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route Not Found' });
  });




// Error handling middleware
app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || 'Internal Server Error';
    res.status(status).json({message:message});
    console.log("Error");
});
