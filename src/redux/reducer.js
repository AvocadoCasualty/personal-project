const initialState = {
    user: {},
    userId: 0,
    isLoggedIn: false
}

const LOGIN_USER = 'LOGIN_USER';
    // LOGOUT_USER = 'LOGOUT_USER';

export function loginUser(user) {
    return {
        type:LOGIN_USER,
        payload: user
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, user:action.payload, isLoggedIn:true}
        default:
            return initialState
    }
}