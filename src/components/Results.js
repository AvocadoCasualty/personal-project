import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import axios from 'axios'
// import './_Results.scss';
import {useHistory} from 'react-router-dom'
import resultsBG from "../icons/BC-in-field.jpg"

function Results() {
    const {selectedBreed, selectedState} = useSelector(({secondReducer})=> secondReducer)
    const [kennels, setKennels] = useState([])
    const {push} = useHistory()

    useEffect(()=> {
        axios.get(`/api/search?breed=${selectedBreed}&state=${selectedState}`)
            .then((res)=> setKennels(res.data))
            .catch(error => console.log(error))
    },[selectedBreed, selectedState])
    console.log(kennels)

    return (
        <div className="Results" >
            <div className='resultsBG'>
            {/*<img src={resultsBG} className='resultsBG' />*/}
            {kennels[0] ? <div> {kennels.map((e) => {
                return <div className='each-result' key={e.kennel_id}
                            onClick={() => push(`/user/${e.user_id}`)}>
                    {e.kennel_name}
                    {e.profile_pic}
                    <div>{e.user_bio}
                        {e.registered_dogs ?
                            <li>Our dogs are registered via: {e.registry}</li> :
                            <li>Our dogs are not registered with any recognized registries.</li>}
                        </div>
                </div>
            })} </div>: <div className='each-result'> No results! </div>}
            </div>
        </div>
    );
}

export default Results;