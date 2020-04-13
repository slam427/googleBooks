const express = require('express');
const mongoose = require('mongoose');
// const routes = require("./routes");
const app = express();
const URL = 'https://www.googleapis.com/books/v1/volumes'
const PORT = process.env.PORT || 3001;
const axios = require('axios');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

app.get('/api/google', function (req, res) {
    console.log(req.query);
    axios.get(URL, {params: req.query}).then(bookResults => {
        console.log(bookResults.data.items);
        res.json(bookResults.data.items.map((item)=>{
            const book = {
                id: item.id,
                title: item.volumeInfo.title,
                authors: item.volumeInfo.authors,
                description: item.volumeInfo.description,
                image: item.volumeInfo.imageLinks.thumbnail,
                viewLink: item.volumeInfo.canonicalVolumeLink
            };
            return book;
        }));
    });
})

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooks");

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});