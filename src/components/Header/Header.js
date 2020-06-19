import React from 'react';
import {Link} from "react-router-dom";
// import './Header.css';

function Header() {

    return (
        <div className="Header">
            <div>
                <img src='#'/>
                <Link to={'/Auth'}>Login/Register</Link>
            </div>
        </div>
    );
}

export default Header;