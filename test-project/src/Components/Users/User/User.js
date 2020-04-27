import React from 'react';
import style from '../User/User.module.sass'


let User = (props) => {
    return(<div className={style.user__container}>
            <div>
                <img src={props.user.photo}/>
            </div>
            <div className={style.name__item}>
                {props.user.name}
            </div>
            <div className={style.position__item}>
                {props.user.position}
            </div>
            <div className={style.email__item}>
                {props.user.email}
            </div>
            <div className={style.phone__item}>
                {props.user.phone}
            </div>
    </div>);
}

export default User;