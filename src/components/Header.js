import React from 'react';
import {Link} from "react-router-dom";
import '../styling/Header.scss';
import logoPic from '../doglogo.png';
import {useDispatch, useSelector} from "react-redux";
import Login from "./Login";
import axios from 'axios';
import {loginUser} from "../redux/reducer";
import {useHistory} from 'react-router-dom';



function Header() {
    const state = useSelector((reduxState) => reduxState)
    const dispatch = useDispatch()
    const history = useHistory()

    function logout() {
        axios.delete('/api/logout').then(res => {
            dispatch(loginUser(null));
            history.push('/dashboard')
        })
    }
    return (
        <div className="Header">
            <div className='logo-pic-div'>
                <img src={logoPic} className='logo-pic' alt='logo-pic'/>
            </div>
            <div className='links'>
                <Link to={'/Dashboard'}>Dashboard</Link>
                {/*<Link to={'/Dashboard'}>Dashboard</Link>*/}
                </div>
            <div className='user-div'>
                {state.user ? <div>
                    <Link to={`/user/${state.user.user_id}`}>{state.user.username}</Link>
                    {state.user.profile_pic}
                    <button onClick={logout}>Logout</button>
                </div> : <div>
                    <Login/> <Link to={'/Auth'} className='auth-link'>Register</Link>
                </div>}

            </div>

        </div>
    );
}

export default Header;