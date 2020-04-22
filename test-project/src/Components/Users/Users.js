import React from 'react';
import users_class from './Users.module.css'

let Users = (props) => {
    return (<div>
        <div className={users_class.users}>
            <div className={users_class.textItem}>Our cheerful users</div>
            <div className={users_class.textItem}>Attention! Sorting users by registration date</div>
            <div className={users_class.usersItem}>
                <div className={users_class.userItem}>
                   sdasdgasdfas
                </div>
                <div className={users_class.userItem}>
                    tfghdfth
                </div>
                <div className={users_class.userItem}>
                    weryertyu
                </div>
            </div>
        </div>
    </div>)
}

export default Users;