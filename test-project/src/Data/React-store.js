import React from 'react'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import UsersReducer from "./Users-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    Users: UsersReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;