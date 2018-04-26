import axios from 'axios';

const initialState = {
    user: {},
    loggedIn: false
}

const GET_USER_INFO = 'GET_USER_INFO';
const LOGIN_LOGOUT = 'LOGIN_LOGOUT';

export function getUserInfo() {
    let userData = axios.get('/auth/me').then(res => {
        return res.data;
    })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export function logInOut(bool){
    return {
        type: LOGIN_LOGOUT,
        payload: bool
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case LOGIN_LOGOUT:
            return Object.assign({}, state, {loggedIn: action.payload})
        default:
            return state
    }
}