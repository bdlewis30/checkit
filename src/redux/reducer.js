import axios from "axios";

const initialState = {
    user: {},
    loggedIn: '',
    accounts: {},
    transactions: {}
}

const GET_USER_INFO = 'GET_USER_INFO';
const LOGIN_LOGOUT = 'LOGIN_LOGOUT';
const GET_ALL_ACCOUNTS = 'GET_ALL_ACCOUNTS';
const GET_ACCOUNT = 'GET_ACCOUNT';
const GET_TRANSACTIONS = 'GET_TRANSACTIONS';

export function getUserInfo() {
    let promise = axios.get('/auth/me').then(res => res.data)
        .catch(error => {
            console.log('getUserInfo Error:', error)
        })
    return {
        type: GET_USER_INFO,
        payload: promise
    }
}

export function getAllAccounts() {
    let promise = axios.get('/api/accounts').then(res => {
        return res.data
    }).catch(error => {
        console.log('getAllAccounts Error:', error)
    })
    return {
        type: GET_ALL_ACCOUNTS,
        payload: promise
    }
}

export function getAccount(id){
    let account = axios.get(`/api/account/${id}`).then(res => {
        return res.data
    }).catch(error => {
        console.log('getAccount error:', error)
    })
    return {
        type: GET_ACCOUNT,
        payload: account
    }
}

export function getTransactions() {
    let transactions = axios.get('/api/transactions').then(res => {
        return res.data
    }).catch(error => {
        console.log('getTransactions error:', error)
    })
    return {
        type: GET_TRANSACTIONS,
        payload: transactions
    }
}

export function logInOut(bool) {
    return {
        type: LOGIN_LOGOUT,
        payload: bool
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
                    axios.defaults.headers.common['x-user-id'] = action.payload.id;
            return Object.assign({}, state, { user: action.payload })
        case GET_ALL_ACCOUNTS + '_FULFILLED':
            return Object.assign({}, state, { accounts: action.payload })
        case GET_ACCOUNT + '_FULFILLED':
            return Object.assign({}, state, {})
        case GET_TRANSACTIONS + '_FULFILLED':
            return Object.assign({}, state, { transactions: action.payload })
        case LOGIN_LOGOUT:
            return Object.assign({}, state, { loggedIn: action.payload })
        default:
            return state
    }
}