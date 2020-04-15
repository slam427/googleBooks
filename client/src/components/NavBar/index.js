import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
                {/* <img id='googleBooksImage' src='/client/public/gBooksLogo.svg'alt='googleBooks'/> */}
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/saved">Saved Books</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;