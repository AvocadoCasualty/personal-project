import React, {useEffect, useState} from 'react';
import axios from 'axios'
import bgimage from "../icons/gerrie-van-der-walt-CEeuWI58JeI-unsplash.jpg";
import {useDispatch, useSelector} from "react-redux";
import {setBreeds, setSelectedBreed, setStates, setSelectedState} from "../redux/secondReducer";
import {useHistory} from 'react-router-dom'

function Dashboard() {
    // const [breeds, setBreeds] = useState([])
    // const [selectedBreed, setSelectedBreed] = useState('')
    // const [states, setStates] = useState([])
    // const [selectedState, setSelectedState] = useState('')
    const {breeds, selectedBreed, states, selectedState} = useSelector(({secondReducer})=>secondReducer)
    const dispatch = useDispatch()
    const {push} = useHistory()


    useEffect(() => {
        axios.get('api/breeds')
            .then(res => dispatch(setBreeds(res.data)))
            .catch(error => console.log(error))
    }, [])
    useEffect(() => {
        axios.get('api/states')
            .then(res => dispatch(setStates(res.data)))
            .catch(error => console.log(error))
    }, [])

    const breedOptionsMap = breeds.map((breed) => <option value={breed.breed_id}
                                                          key={`${breed.breed_id} ${breed.breed_name}`}>{breed.breed_name}</option>)
    const stateOptionsMap = states.map((state) => <option value={state.state_id}
                                                          key={`${state.state_id} ${state.state_name}`}>{state.state_name}</option>)
    return (

        <div className="Dashboard">
            <div className='container'>
                <img src={bgimage} className="bgimage"/>

                <div className='dropdowns'>
                    <div className="dd-header-title">
                        Search by Breed:
                        <div className="dd-wrapper">
                            <select className="dd-list" onChange={(e) => dispatch(setSelectedBreed(e.target.value))}
                                    value={selectedBreed} placeholder='No Breed Selected'>
                                {breedOptionsMap}
                            </select>
                        </div>
                    </div>
                    <div className="dd-header-state">
                        Search by State:
                        <div className="dd-wrapper">
                            <select className="dd-list" onChange={(e) => dispatch(setSelectedState(e.target.value))}
                                    value={selectedState} placeholder='No State Selected'>
                                {stateOptionsMap}
                            </select>
                        </div>
                    </div>
                    <button className='search-btn' onClick={() => push('/results')}>Search!</button>
                </div>

            </div>
        </div>
    );
}

export default Dashboard;