import React, {useEffect, useState} from 'react';
import './style.css';
import API from '../utils/API';
import BookList from '../components/BookList';

function Saved() {
   const [booksArray, setBooks] = useState([]);
    
    useEffect(()=> {
    API.getAllBooks().then((res)=>{
        console.log(res.statusdata);
        setBooks(res.data);
    })
    },[])
    return (
        <div>
            <header>
                (React) My Saved Google Books
            </header>
            <BookList books={booksArray}/>
        </div>
    )
}


export default Saved;