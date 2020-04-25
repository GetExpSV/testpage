import UserApi from "../Api/Users";

const getUsersType = "GET-USERS";
const getPositionsType = "GET-POSITIONS";
const getCurrentPageType = "GET-CURRENT-PAGE";
const getTotalPageType = "GET-TOTAL-PAGE";
const getIsSuccessType = "GET-IS-SUCCESS";

let initialState = {
    Users: [],
    Positions: [],
    CurrentPage: 1,
    TotalPage: 0,
    CountUsers: 6,
    isSuccess: false
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
        case getCurrentPageType:
            return{
                ...state,
                CurrentPage: action.CurrentPage
            }
        case getTotalPageType:
            return{
                ...state,
                TotalPage: action.TotalPage
            }
        case getIsSuccessType:
            return{
                ...state,
                isSuccess: action.success
            }
        default:
            return state;
    }
}

let getUsers = (Users) => {return{type: getUsersType, Users}}
let getPositions = (Positions) =>{ return{type: getPositionsType, Positions}}
let getCurrentPage = (CurrentPage) =>{return{type: getCurrentPageType, CurrentPage}}
let getTotalPage = (TotalPage) =>{return{type: getTotalPageType, TotalPage}}
export const getSuccess = (success) =>{return{type: getIsSuccessType, success}}

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
            if(data.success) {
                dispatch(getUsers(data.users));
                dispatch(getTotalPage(data.total_pages));
                if(page <= data.total_pages){
                    dispatch(getCurrentPage(page+1));
                }
            } else {
            }
    })
}

export const setUser = (regUser, positions) => (dispatch) =>{
    let formData = new FormData();
    let position = positions.find(n=> n.name === regUser.position)
    debugger;
    formData.append('position_id', position.id);
    formData.append('name', regUser.personName);
    formData.append('email', regUser.email);
    formData.append('phone', regUser.phoneNumber);
    formData.append('photo', regUser.photo);

    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
                method: 'POST',
                body: formData,
                headers: {
                    'Token': data.token, // get token with GET api/v1/token method
                },
            })
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    if(data.success) {
                        dispatch(getSuccess(true));
                        dispatch(getUsersData(1,6))
                    } else {
                        // proccess server errors
                    }
                })
                .catch(function(error) {
                    // proccess network errors
                });

        })
        .catch(function(error) {
            // proccess network errors
        });

}

export default UsersReducer;