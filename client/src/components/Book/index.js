import React from 'react';
import "./style.css";
import API from '../../utils/API';
// import axios from 'axios';


function Book(props) {
    const handleClick = (event) => {
    API.saveBook(props.bookInfo).then(results => {
        console.log(results);
    });
    }
    return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{props.bookInfo.title}</span>
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <a href="">view</a>
                        <button onClick={handleClick}>save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book;