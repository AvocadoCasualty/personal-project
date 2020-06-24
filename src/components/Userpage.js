import React, {useEffect, useState} from 'react';
import '../styling/_Userpage.scss';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useSelector} from "react-redux";
import websiteIcon from '../icons/world.png';
import fbIcon from '../icons/facebook.png';
import igIcon from '../icons/instagram.png';
import twitterIcon from '../icons/twitter.png'


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
                        <div> About us:
                            <span>{userpage.user_bio} </span>
                        </div>
                        <ul>
                            {userpage.registered_dogs ?
                                <li>Our dogs are registered via: {userpage.registry}</li> :
                                <li>Our dogs are not registered with any recognized registries.</li>}
                            {userpage.female_dogs ? <li>We have {userpage.female_dogs} females.</li> : null}
                            {userpage.male_dogs ? <li>We have {userpage.male_dogs} males.</li> : null}
                            {userpage.breed_tests ? <li>We do preform breed specific testing on our dogs!</li> : null}
                        </ul>
                        <div className='user-info'>
                            <div> We are located in the {userpage.region_code} region of the United States, more
                                specifically {userpage.state_name}.
                            </div>
                            <div className='social-media'>
                                <a href={userpage.website}>
                                    <img className='website-icon' src={websiteIcon} alt='website-icon'/>
                                </a>
                                <a href={userpage.facebook}>
                                    <img className='fb-icon' src={fbIcon} alt='fb-icon'/>
                                </a>
                                <a href={userpage.instagram}>
                                    <img className='ig-icon' src={igIcon} alt='ig-icon'/>
                                </a>
                                <a href={userpage.twitter}>
                                    <img className='twitter-icon' src={twitterIcon} alt='twitter-icon'/>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>)}

            </div>
        </div>
    );
}

export default Userpage;