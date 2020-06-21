const initialState = {
    user: null,
}

const LOGIN_USER = 'LOGIN_USER';
    // LOGOUT_USER = 'LOGOUT_USER';

export function loginUser(user) {
    console.log(user, 'this is the user')
    return {
        type:LOGIN_USER,
        payload: user
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, user:action.payload}
        default:
            return initialState
    }
}