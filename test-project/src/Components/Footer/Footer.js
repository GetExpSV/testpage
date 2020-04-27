import React from 'react'
import style from './Footer.module.sass'

let Footer = (props) =>{
    return(<div className={style.footer__container}>
        <div className={style.footer__item}>&copy; abz.agency specially for the test task</div>
    </div>);
}

export default Footer;