// import React, {useEffect, useState} from 'react';
// import '../styling/_Userpage.scss';
// import {useParams} from 'react-router-dom';
// import axios from 'axios';
// import {useSelector} from "react-redux";
// import websiteIcon from '../icons/world.png';
// import fbIcon from '../icons/facebook.png';
// import igIcon from '../icons/instagram.png';
// import twitterIcon from '../icons/twitter.png'
// import {setBreeds, setStates} from "../redux/secondReducer";
//
//
// function UserpageOld() {
//
//     const [userpage, setUserpage] = useState({});
//     const [editing, setEditing] = useState(false)
//     const [states, setStates] = useState([])
//     const [breeds, setBreeds] = useState([])
//     const params = useParams();
//     const state = useSelector(({reducer}) => reducer)
//
//     useEffect(() => {
//         // console.log(params, 'params')
//         axios.get(`/api/user/${params.user_id}`).then(res => setUserpage(res.data))
//             .catch(error => console.log(error))
//     }, [params])
//
//     useEffect(() => {
//         axios.get('api/breeds')
//             .then(res => setBreeds(res.data))
//             .catch(error => console.log(error))
//     }, [])
//     useEffect(() => {
//         axios.get('api/states')
//             .then(res => {
//                 console.log(res.data, 'the data')
//                 setStates(res.data)
//             })
//             .catch(error => console.log(error))
//     }, [])
//
//     const saveData = () => {
//         setEditing(false);
//         console.log(userpage)
//         axios.put(`/api/${userpage.kennel_id}`, userpage)
//             .then((results) => setUserpage(results.data))
//             .catch(error => console.log(error))
//     }
//     const handleChange = (e) => {
//         const {name, value} = e.target
//         setUserpage({...userpage, [name]: value})
//     }
//     const breedOptionsMap = breeds.map((breed) => <option value={breed.breed_id}
//                                                           key={`${breed.breed_id} ${breed.breed_name}`}>{breed.breed_name}</option>)
//     const stateOptionsMap = states.map((state) => <option value={state.state_id}
//                                                           key={`${state.state_id} ${state.state_name}`}>{state.state_name}</option>)
//
//     console.log(userpage)
//     return (
//         <div className="Userpage">
//             <div className='userpage-info'>
//                 {editing ? (<div>
//                     {/*editing input fields*/}
//                     <div className='editKennel'>
//                         <div className='edit-name'>
//                         <span>Kennel Name: </span>
//                         <input
//                             name='kennel_name'
//                             value={userpage.kennel_name}
//                             onChange={(e) => setUserpage({...userpage, kennel_name: e.target.value})}/>
//                         </div>
//                         <br/>
//                         <span>The breed you specialize in(Sorry, we can only do one breed per profile at this time!): </span>
//
//                         {breeds.length > 0 && <select
//                             className='breed'
//                             name='breed_id'
//                             value={userpage.breed_id}
//                             onChange={(e) => setUserpage({...userpage, breed_id: e.target.value})}>
//                             {breedOptionsMap}
//                         </select>}
//                         <br/>
//                         <span> Current state : </span>
//                         {states.length > 0 && <select
//                             className='state'
//                             name='state_id'
//                             value={userpage.state_id}
//                             onChange={(e) => setUserpage({...userpage, state_id: e.target.value})}>
//                             {stateOptionsMap}
//                         </select>}
//                         <br/>
//                                <span> Profile Picture: </span>
//                         <input
//                             name='profile-pic'
//                             value={userpage.profile_pic}
//                             onChange={handleChange}/>
//                                <br/>
//                         <span>User Bio: </span>
//                         <textarea
//                             className='user-bio'
//                             name='user_bio' value={userpage.user_bio}
//                             onChange={handleChange}/>
//                         <ul>
//                             <li>Are your dogs registered?
//                             {/*<input*/}
//                             {/*    type='checkbox'*/}
//                             {/*    name='registered_dogs'*/}
//                             {/*    checked={userpage.registered_dogs}*/}
//                             {/*    onChange={} />*/}
//                             <label for='registered_dogs'> Yes </label></li>
//                         </ul>
//                     </div>
//
//                     <button onClick={() => saveData()}>Save</button>
//                 </div>) : (<div>
//                     {/*display user data*/}
//                     <div className='kennel-info' key={userpage.kennel_id}>
//                         <div className='kennel-pic'>
//                             <img src={userpage.profile_pic}/>
//                         </div>
//                         <div className='kennel-text'>
//                             <h2>{userpage.kennel_name}</h2>
//                             <div> Our breed is the: {userpage.breed_name}</div>
//                             <br/>
//                             <div> About us:
//                                 <br/>
//                                 <span>{userpage.user_bio} </span>
//                             </div>
//                             <ul>
//                                 {userpage.registered_dogs ?(
//                                     <li>Our dogs are registered via: {userpage.registry}</li>
//                                     ) :(
//                                     <li>Our dogs are not registered with any recognized registries.</li>
//                                 )}
//                                 {userpage.working_variation ?
//                                     <li> Our dogs are the working variation of the breed.</li> : null}
//                                 {userpage.show_variation ?
//                                     <li> Our dogs are the show variation of the breed.</li> : null}
//                                 {userpage.female_dogs ? <li>We have {userpage.female_dogs} females.</li> : null}
//                                 {userpage.male_dogs ? <li>We have {userpage.male_dogs} males.</li> : null}
//                                 {userpage.breed_tests ?
//                                     <li>We do preform breed specific testing on our dogs!</li> : null}
//                             </ul>
//                             <div className='user-info'>
//                                 <div> We are located in the {userpage.region_code} region of the United States, more
//                                     specifically {userpage.state_name}.
//                                 </div>
//                                 <div className='social-media'>
//                                     <span> Find us here: </span>
//                                     <br/>
//                                     {userpage.website ? <a href={userpage.website}>
//                                         <img className='website-icon' src={websiteIcon} alt='website-icon'/>
//                                     </a> : null}
//                                     {userpage.facebook ? <a href={userpage.facebook}>
//                                         <img className='fb-icon' src={fbIcon} alt='fb-icon'/>
//                                     </a> : null}
//                                     {userpage.instagram ? <a href={userpage.instagram}>
//                                         <img className='ig-icon' src={igIcon} alt='ig-icon'/>
//                                     </a> : null}
//                                     {userpage.twitter ? <a href={userpage.twitter}>
//                                         <img className='twitter-icon' src={twitterIcon} alt='twitter-icon'/>
//                                     </a> : null}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>)}
//             </div>
//             {state.user && userpage.user_id === state.user.user_id && (
//                 <div>
//                     <button onClick={() => setEditing(!editing)}>{editing ? "Cancel" : "Edit Information"}</button>
//                 </div>)}
//         </div>
//     );
// }
//
// export default UserpageOld;
