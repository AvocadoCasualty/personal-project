import React, {useState} from 'react';
// import './App.scss';
import {useDispatch} from "react-redux";
import {loginUser} from "../redux/reducer";
import axios from 'axios';


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
                onChange={(e) => setUsername(e.target.value)}/>
            <input
                name={password}
                value={password}
                type='password'
                onChange={(e)=> setPassword(e.target.value)}/>
            <button onClick={login}>Login</button>
        </div>
    );
}

export default Login;