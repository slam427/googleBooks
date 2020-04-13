const axios = require ('axios');
const router = require('express').Router();
const URL = 'https://www.googleapis.com/books/v1/volumes'


router.route('/').get(function (req, res) {
    console.log('myRequest',req);
    axios.get(URL, req.params).then(bookResults => {
        console.log(bookResults);
        res.json(bookResults);
    });
})


module.exports = router;

// https://www.googleapis.com/books/v1/volumes?q=?&fields=items(id,volumeInfo(title,authors,description,canonicalVolumeLink,imageLinks(thumbnail)))