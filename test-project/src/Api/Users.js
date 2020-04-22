import React from 'react';
import * as fetch from 'fetch'

export let UserApi = {
    getUsers(page, count){
        fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`)
            .then(response=> {return response.json();})
    }
}

export default UserApi;