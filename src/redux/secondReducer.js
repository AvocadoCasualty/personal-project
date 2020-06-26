const initialState = {
    breeds: [],
    selectedBreed: 0,
    states: [],
    selectedState: 0
}

const SET_BREEDS = 'SET_BREEDS';
const SET_STATES = 'SET_STATES';
const SET_SELECTED_BREED = 'SET_SELECTED_BREED';
const SET_SELECTED_STATE = 'SET_SELECTED_STATE';

export function setBreeds(breeds) {
    return {
        type:SET_BREEDS,
        payload: breeds
    }
}
export function setSelectedBreed(breed) {
    return {
        type:SET_SELECTED_BREED,
        payload: breed
    }
}
export function setStates(states) {
    return {
        type:SET_STATES,
        payload: states
    }
}
export function setSelectedState(state) {
    return {
        type:SET_SELECTED_STATE,
        payload: state
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_BREEDS:
            return {...state, breeds:action.payload}
        case SET_SELECTED_BREED:
            return {...state, selectedBreed:action.payload}
        case SET_STATES:
            return {...state, states:action.payload}
        case SET_SELECTED_STATE:
            return {...state, selectedState: action.payload}
        default:
            return state
    }
}