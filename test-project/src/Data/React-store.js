import React from 'react'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import UsersReducer from "./Users-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    Users: UsersReducer,
    form: formReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;