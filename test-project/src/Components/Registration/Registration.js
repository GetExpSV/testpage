import React from 'react';
import reg_class from './Registration.module.css'
import RegistrationFormRedux from "./RegistrationForm";
import {connect} from "react-redux";
import {initialize} from 'redux-form';


class Registration extends React.Component {

    onSubmit = (value) => {
        console.log(value)
    }

    render() {
        return (<div className={reg_class.registrationItem}>
            <div className={reg_class.topItem}>Register to get a work</div>
            <div className={reg_class.alertItem}>Attention! after successful registration and alert, update the
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

export default connect(mapStateToProps, {initialize})(Registration);