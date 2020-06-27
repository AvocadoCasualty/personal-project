import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import axios from 'axios'
// import './_Results.scss';
import {useHistory} from 'react-router-dom'

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
            <div > {kennels.map((e) => {return<div key={e.kennel_id} onClick={()=> push(`/user/${e.user_id}`)}> {e.kennel_name} {e.profile_pic} </div>})} </div>
        </div>
    );
}

export default Results;