import React, {useEffect, useState} from 'react';
// import './Userpage.scss';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useSelector} from "react-redux";

function Userpage() {

    const [userpage, setUserpage] = useState({});
    const params = useParams();
    const state = useSelector((reduxState) => reduxState)

    useEffect(() => {
        console.log(params, 'params')
        axios.get(`/api/user/${params.user_id}`).then(res => setUserpage(res.data))
            .catch(error => console.log(error))
    }, [])

    console.log(userpage)
    return (
        <div className="Userpage">
            <div>
                {state.user && userpage.user_id === state.user.user_id ? <button>Edit Kennel </button> : <span>&nbsp;</span>}

            </div>
        </div>
    );
}

export default Userpage;