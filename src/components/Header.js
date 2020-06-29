import React from 'react';
import {Link} from "react-router-dom";
import '../styling/_Header.scss';
import logoPic from '../icons/doglogo.png';
import {useDispatch, useSelector} from "react-redux";
import Login from "./Login";
import axios from 'axios';
import {loginUser} from "../redux/reducer";
import {useHistory} from 'react-router-dom';


function Header() {
    const state = useSelector(({reducer}) => reducer)
    const dispatch = useDispatch()
    const history = useHistory()

    function logout() {
        axios.delete('/api/logout').then(res => {
            dispatch(loginUser(null));
            history.push('/')
        })
    }


    return (
        <div className="Header">
            <div className='logo-pic-div'>
                <img src={logoPic} className='logo-pic' alt='logo-pic'/>
            </div>
            <div className='links'>
                <Link to={'/'}>Home</Link>
                {/*<Link to={'/Dashboard'}>Dashboard</Link>*/}
            </div>
            <div className='text-div'>
                <h2>Reputable Rover Resource</h2>
            </div>
            <div className='user-div-desktop'>
                {state.user ? <div>
                    <Link to={`/user/${state.user.user_id}`}>{state.user.username}</Link>
                    <button onClick={logout}>Logout</button>
                </div> : <div className='login-div'>
                    <Login/>
                </div>}
            </div>
        </div>
    );
}

export default Header;