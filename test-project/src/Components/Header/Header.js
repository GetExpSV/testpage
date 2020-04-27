import React, {useState} from 'react'
import logophoto from '../../Image/logo.svg'
import menuIcon from '../../Image/menu icon.svg'
import style from './Header.module.sass'
import {NavLink} from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import MenuSlider from "../Popup/MenuSlider";

let Header = (props) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(max-device-width: 768px)'          //width when must use burgerMenu
    })

    let [isMenu, setIsMenu] = useState(false);      //hook for active/deactivate menu

    let onSuccess = () =>{
        setIsMenu(!isMenu);
    }
    return (
        <div className={style.header__container}>
            <div className={style.header__item}>
                <img src={logophoto}/>
                {isDesktopOrLaptop ? <div><div className={style.menu__item} onClick={onSuccess}><img src={menuIcon}/></div>
                    {isMenu ? <MenuSlider onSuccess={onSuccess}/> : "" }</div> :<div>
                <NavLink to={"1"} activeClassName={style.active__item}>Sign Up</NavLink>
                <NavLink to={"2"} activeClassName={style.active__item}>Users</NavLink>
                <NavLink to={"3"} activeClassName={style.active__item}>Requirements</NavLink>
                <NavLink to={"4"} activeClassName={style.active__item}>Relationships</NavLink>
                    <NavLink to={"5"} activeClassName={style.active__item}>About me</NavLink></div>}
            </div>
        </div>);

}

export default Header;