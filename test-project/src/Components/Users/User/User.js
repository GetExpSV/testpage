import React from 'react';
import user_class from '../User/User.module.css'


let User = (props) => {
    debugger;
    return(<div className={user_class.item}>
            <div className={user_class.textItem}>
                <img src={props.user.photo}/>
            </div>
            <div className={user_class.textItem}>
                {props.user.name}
            </div>
            <div className={user_class.textItem}>
                {props.user.position}
            </div>
            <div className={user_class.textItem}>
                {props.user.email}
            </div>
            <div className={user_class.textItem}>
                {props.user.phone}
            </div>
    </div>);
}

export default User;