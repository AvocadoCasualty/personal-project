import React, {useState} from 'react';
// import './App.scss';
import {useDispatch} from "react-redux";
import {loginUser} from "../redux/reducer";
import axios from 'axios';
import {Link} from "react-router-dom";


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    function login() {
        axios.post('/api/login', {username, password}).then(res => dispatch(loginUser(res.data)))
            .catch(error => console.log(error))
    }

    return (
        <div className="Login">
            <input
                name={username}
                value={username}
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}/>
                <br/>
            <input
                name={password}
                value={password}
                placeholder='Password'
                type='password'
                onChange={(e)=> setPassword(e.target.value)}/>
                <br/>
            <button onClick={login}>Login</button>
            <Link to={'/Auth'} className='auth-link'>Register</Link>

        </div>
    );
}

export default Login;