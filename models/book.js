const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
    bookID: {
        type: String,
    },
    title: {
        type: String,
    },
    authors: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    viewLink: {
        type: String,
    }
},

);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;