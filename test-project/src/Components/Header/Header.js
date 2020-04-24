import React from 'react'
import logophoto from '../../Image/logo.svg'
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

let Header = (props) => {
    return (
        <div className={style.header__container}>
            <div className={style.header__item}>
                <img src={logophoto}/>
                <NavLink to={"1"} activeClassName={style.active__item}>Sign Up</NavLink>
                <NavLink to={"2"} activeClassName={style.active__item}>Users</NavLink>
                <NavLink to={"3"} activeClassName={style.active__item}>Requirements</NavLink>
                <NavLink to={"4"} activeClassName={style.active__item}>Relationships</NavLink>
                <NavLink to={"5"} activeClassName={style.active__item}>About me</NavLink>
            </div>
        </div>);
}

export default Header;