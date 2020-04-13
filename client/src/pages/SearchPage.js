import React, { useState } from 'react';
import Search from '../components/Search';
import BookList from '../components/BookList';

function SearchPage() {
    const [bookResults, setBookResults] = useState ([]);

    return (
        <div>
        <header>
            (React) Google Books Search
            <p>Search for and Save Books of Interest</p>
        </header>
        <Search setBookResults= {setBookResults}/>
        <BookList books= {bookResults}/>
        </div>
    );
}

export default SearchPage;
