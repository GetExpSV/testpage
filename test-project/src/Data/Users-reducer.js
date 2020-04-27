
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
                Users: !action.isNew ? [...state.Users, ...action.Users] : action.Users
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

let getUsers = (Users, isNew) => {return{type: getUsersType, Users, isNew}}
let getPositions = (Positions) =>{ return{type: getPositionsType, Positions}}
let getCurrentPage = (CurrentPage) =>{return{type: getCurrentPageType, CurrentPage}}
let getTotalPage = (TotalPage) =>{return{type: getTotalPageType, TotalPage}}
export const getSuccess = (success) =>{return{type: getIsSuccessType, success}}

let getPositionsFromData = () =>{
    return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
}
let getUsersFromData = (page, count, isNew = false) =>{
    return fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`)
}
let getTokenFromData = () =>{
    return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
}
let postUserIntoData = (token, formData) =>{
    return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
        method: 'POST',
        body: formData,
        headers: {
            'Token': token, // get token with GET api/v1/token method
        },
    })
}

export const getPositionsData = () => (dispatch) =>{
    getPositionsFromData()
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if(data.success){
                dispatch(getPositions(data.positions))
            }
        })
}

export let getUsersData = (page, count, isNew = false) => (dispatch) =>{
    getUsersFromData(page, count)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if(data.success) {
                dispatch(getUsers(data.users, isNew));
                dispatch(getTotalPage(data.total_pages));
                if(page <= data.total_pages){
                    dispatch(getCurrentPage(page+1));
                }
            }
    })
}

export const setUser = (regUser, positions) => (dispatch) =>{
    let formData = new FormData();
    let position = positions.find(n=> n.name === regUser.position)

    formData.append('position_id', position.id);
    formData.append('name', regUser.personName);
    formData.append('email', regUser.email);
    formData.append('phone', regUser.phoneNumber);
    formData.append('photo', regUser.photo);

    getTokenFromData()
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            postUserIntoData(data.token, formData)
                .then(function(response) {
                    return response.json();
                })
                .then(function(data) {
                    if(data.success) {
                        dispatch(getSuccess(true));
                        dispatch(getUsersData(1,6, true));
                    } else {
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