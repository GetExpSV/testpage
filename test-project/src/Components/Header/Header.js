import React from 'react'
import logophoto from '../../Image/logo.svg'
import header_class from './Header.module.css'

let Header = (props) => {
    return (
        <div>
            <div className={header_class.header}>
                <img src={logophoto}/>
                <a href="#">Sign Up</a>
                <a href="#">Users</a>
                <a href="#">Requirements</a>
                <a href="#">Relationships</a>
                <a href="#">About me</a>
            </div>
        </div>);
}

export default Header;