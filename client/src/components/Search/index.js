import React, { useState } from 'react';
// import axios from 'axios';
import './style.css';
import API from '../../utils/API';

function Search (props) {
const [searchInput, setSearchInput] = useState(""); 
const handleChange = (event) => {
setSearchInput(event.target.value);
console.log(searchInput);
}
const handleSubmit= (event) => {
console.log(event)
event.preventDefault();
API.googleBookSearch(searchInput).then(results => {
    console.log(results);
props.setBookResults(results.data)
})

}
return (
<form onSubmit={handleSubmit}>
<input onChange={handleChange} type='text' name='searchInput'/>
<button type='submit'>
    Search
</button>
</form>
)}


export default Search;