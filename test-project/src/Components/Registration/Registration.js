import React from 'react';
import style from './Registration.module.css'
import RegistrationFormRedux from "./RegistrationForm";
import {connect} from "react-redux";
import {setUser} from "../../Data/Users-reducer";


class Registration extends React.Component {

    onSubmit = (value) => {
        this.props.setUser(value, this.props.positions);
    }

    render() {
        return (<div className={style.registration__container}>
            <div className={style.top__item}>Register to get a work</div>
            <div className={style.attention__item}>Attention! after successful registration and alert, update the
                list of users in the block from the top
            </div>
            <RegistrationFormRedux onSubmit={this.onSubmit}/>
        </div>)
    }
}

let mapStateToProps = (state) => {
    return {
        positions: state.Users.Positions
    }
}

export default connect(mapStateToProps, {setUser})(Registration);