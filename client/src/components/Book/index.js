import React from 'react';
import "./style.css";
import API from '../../utils/API';



function Book(props) {
    const handleClick = (event) => {
        props.bookInfo.authors = props.bookInfo.authors[0]
        API.saveBook(props.bookInfo).then(results => {
            console.log(results);
        });
    }
    return (
            <div className="card medium blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{props.bookInfo.title}</span>
                    <img src={props.bookInfo.image} alt={props.bookInfo.title}></img>
                    <p>{props.bookInfo.authors}</p>
                    <p className='bookDescription'>{props.bookInfo.description}</p>
                </div>
                <div className="card-action">
                    <a href={props.bookInfo.viewLink}>view</a>
                    <button onClick={handleClick}>save</button>
                </div>
            </div>
    )
}

export default Book;