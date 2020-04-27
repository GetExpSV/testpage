import React from 'react'
import style from './MenuSlider.module.sass'
import {NavLink} from "react-router-dom";
import logophoto from "../../Image/logo.svg";

class MenuSlider extends React.Component {
    render() {
        return (
            <div className={style.popup}>
                <div className={style.disable} onClick={this.props.onSuccess}></div>
                <div className={style.popup__inner}>
                    <div className={style.image__item}>
                        <img src={logophoto}/>
                    </div>
                    <div className={style.top__item}>
                        <NavLink to={"1"} activeClassName={style.active__item}>About me</NavLink>
                        <NavLink to={"2"} activeClassName={style.active__item}>Relationships</NavLink>
                        <NavLink to={"3"} activeClassName={style.active__item}>Users</NavLink>
                        <NavLink to={"4"} activeClassName={style.active__item}>Sign Up</NavLink>
                        <NavLink to={"5"} activeClassName={style.active__item}>Terms and conditions</NavLink>
                    </div>
                    <div className={style.mid__item}>
                        <NavLink to={"6"} activeClassName={style.active__item}>How it works</NavLink>
                        <NavLink to={"7"} activeClassName={style.active__item}>Partnership</NavLink>
                        <NavLink to={"8"} activeClassName={style.active__item}>Help</NavLink>
                        <NavLink to={"9"} activeClassName={style.active__item}>Leave testimonial</NavLink>
                        <NavLink to={"10"} activeClassName={style.active__item}>Contact us</NavLink>
                    </div>
                    <div className={style.bottom__item}>
                        <NavLink to={"11"} activeClassName={style.active__item}>Articles</NavLink>
                        <NavLink to={"12"} activeClassName={style.active__item}>Our news</NavLink>
                        <NavLink to={"13"} activeClassName={style.active__item}>Testimonials</NavLink>
                        <NavLink to={"14"} activeClassName={style.active__item}>Licenses</NavLink>
                        <NavLink to={"15"} activeClassName={style.active__item}>Privacy policy</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuSlider