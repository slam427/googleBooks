import React from 'react';
import './style.css';
import Book from '../Book';

function BookList (props) {
    //make sure book array is being passed
    console.log(props)
return (
    <div>
        {props.books.map(book =>  <Book bookInfo={book}/>
        )}
    </div>
)
}

export default BookList;