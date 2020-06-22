import React, {useEffect, useState} from 'react';
// import './Userpage.scss';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useSelector} from "react-redux";

function Userpage() {

    const [userpage, setUserpage] = useState({});
    const [editing, setEditing] = useState(false)
    const params = useParams();
    const state = useSelector((reduxState) => reduxState)

    useEffect(() => {
        // console.log(params, 'params')
        axios.get(`/api/user/${params.user_id}`).then(res => setUserpage(res.data))
            .catch(error => console.log(error))
    }, [params])

    // console.log(userpage)
    return (
        <div className="Userpage">
            <div>
                {state.user && userpage.user_id === state.user.user_id && (
                    <div>
                        <button onClick={() => setEditing(!editing)}>{editing ? "Cancel" : "Edit"}</button>
                    </div>)}
                {editing ? (<div>
                    {/*editing input fields*/}

                    <button onClick={() => setEditing(false)}>Save(butnotreally)</button>
                </div>) : (<div>
                    {/*display user data*/}
                    <div className='kennel-info' key={userpage.kennel_id}>
                        <h2>{userpage.kennel_name}</h2>
                        <span>{userpage.user_bio} </span>
                        <ul>
                            {userpage.registered_dogs ?
                                <li>Our dogs are registered via: {userpage.registry}</li> :
                                <li>Our dogs are not registered with any recognized registries.</li>}
                            {userpage.female_dogs ? <li>We have {userpage.female_dogs} females.</li> : null}
                            {userpage.male_dogs ? <li>We have {userpage.male_dogs} males.</li> : null}
                            {userpage.breed_tests ? <li>We do preform breed testing on our dogs!</li> : null}
                        </ul>
                        <div className='user-info'>

                        </div>
                    </div>


                </div>)}

            </div>
        </div>
    );
}

export default Userpage;