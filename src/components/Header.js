import React from 'react';
import {Link} from "react-router-dom";
import '../styling/Header.scss';
import logoPic from '../../doglogo.png';
import {useSelector} from "react-redux";
import Login from "../Login/Login";


function Header() {
    const state = useSelector((reduxState) => reduxState)
    return (
        <div className="Header">
            <div className='logo-pic-div'>
                <img src={logoPic} className='logo-pic' alt='logo-pic'/>
            </div>
            <div className='user-div'>
                {state.user ? <div>{state.user.username}{state.user.profile_pic}</div> : <div>
                    <Login/> <Link to={'/Auth'} className='auth-link'>Register</Link>
                </div>}

            </div>

        </div>
    );
}

export default Header;