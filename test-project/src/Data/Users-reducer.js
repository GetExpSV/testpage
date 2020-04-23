import UserApi from "../Api/Users";

const getUsersType = "GET-USERS";
const getPositionsType = "GET-POSITIONS";


let initialState = {
    Users: [],
    Positions: []
}

let UsersReducer = (state = initialState, action) =>{
    switch(action.type){
        case getUsersType:
            return{
                ...state,
                Users: [...state.Users, ...action.Users]
            }
        case getPositionsType:
            return{
                ...state,
                Positions: action.Positions
            }
        default:
            return state;
    }
}

let getUsers = (Users) => {return{type: getUsersType, Users}}
let getPositions = (Positions) =>{ return{type: getPositionsType, Positions}}

export const getPositionsData = () => (dispatch) =>{
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            if(data.success){
                dispatch(getPositions(data.positions))
            }
        })
}

export let getUsersData = (page, count) => (dispatch) =>{
    fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            if(data.success) {
                dispatch(getUsers(data.users))
            } else {
            }
    })
}

export default UsersReducer;