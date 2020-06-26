import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import axios from 'axios'
// import './_Results.scss';

function Results() {
    const {selectedBreed, selectedState} = useSelector(({secondReducer})=> secondReducer)
    const [kennels, setKennels] = useState([])

    useEffect(()=> {
        axios.get(`/api/search?breed=${selectedBreed}&state=${selectedState}`)
            .then((res)=> setKennels(res.data))
            .catch(error => console.log(error))
    },[selectedBreed, selectedState])
    console.log(kennels)

    return (
        <div className="Results" >
            <div > {kennels.map((e) => {return<div key={e.kennel_id}> {e.kennel_name} </div>})} </div>
        </div>
    );
}

export default Results;