const express = require('express');
const mongoose = require('mongoose');
// const routes = require("./routes");
const app = express();
const URL = 'https://www.googleapis.com/books/v1/volumes?maxResults=40'
const PORT = process.env.PORT || 3001;
const axios = require('axios');
const db = require('./models');
// const routes = require('./routes')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);


app.get('/api/allbooks', function (req, res) {
    db.Book.find({}).then((allBooks)=> {
        res.json(allBooks);
    })
})
app.post('/api/savebook', function (req, res) {
    console.log("SAAAAAVVVVVEEEEE",req.body);
    db.Book.create(req.body).then(bookData => {
        res.json(bookData);
    });

})

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooks");

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});