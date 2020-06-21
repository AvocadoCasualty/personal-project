import React, {useState} from 'react';

import {useDispatch} from "react-redux";
import {loginUser} from "../redux/reducer";
import axios from 'axios';
import {useHistory} from 'react-router-dom'

function Auth() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const register = (e) => {
        e.preventDefault()
        axios.post('/api/register', {username, password, email})
            .then((res) => {
                dispatch(loginUser(res.data))
                history.push(`/user/${res.data.user_id}`)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="Auth">
            <form onSubmit={register}>
                <input placeholder='username' name='username' value={username} onChange={(e)=> setUsername(e.target.value)}/>
                <input placeholder='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input placeholder='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <button type='submit'>Register</button>
            </form>
            <p>Text here so I can see what I'm doing</p>
        </div>
    );
}

export default Auth;