import React, {useState} from "react";
import {
    fieldComponentForm,
    fieldComponentFormPhone,
    FieldFileInput,
    fieldRadio
} from "../../FieldComponents/fieldComponents";
import style from "./RegistrationForm.module.sass";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {compose} from "redux";
import {
    EmailValidate,
    MaxLengthString,
    MinLengthString,
    PhoneValidate, PhotoValidate,
    required
} from "../../FieldValidation/FieldValidation";

let fieldComponent = fieldComponentForm("input");  //custom component for field
let fieldComponentPhone = fieldComponentFormPhone("input"); //custom component for field

let minLength = MinLengthString(2); //validate thunk
let maxLength = MaxLengthString(60); //validate thunk

let registrationForm = (props) => {
    let positionsRadio = props.positions.map(data=> <div className={style.radio__item}>
        <Field component={fieldRadio} name={"position"} type={"radio"} value={data.name}/>
        <span className={style.radio__name}>{data.name}</span>
    </div>)            //get array for show position into radio

    return (<form onSubmit={props.handleSubmit} className={style.formItem}>
        <div className={style.item}>Name
            <div>
                <Field component={fieldComponent} name={"personName"} placeholder={"Your name"}
                       validate={[required, minLength, maxLength]}/>
            </div>
        </div>
        <div className={style.item}>Email
            <div>
                <Field component={fieldComponent} name={"email"} placeholder={"Your email"}
                validate={[required, EmailValidate]}/>
            </div>
        </div>
        <div className={style.item}>Phone number
            <div>
                <Field component={fieldComponentPhone} name={"phoneNumber"} placeholder={"+380 XX XXX XX XX"}
                validate={[required, PhoneValidate]}/>
            </div>
        </div>
        <div className={style.item}>
            <div>Select your position</div>
            {positionsRadio}
        </div>
        <div className={style.item}>Photo
            <div>
                <Field component={FieldFileInput} name={"photo"} validate={[required, PhotoValidate]}/>
            </div>
        </div>
        <div onClick={props.handleSubmit} className={style.sing__item}>Sing up now</div>
    </form>)
}

let mapStateToProps = (state) =>{
    return{
        positions: state.Users.Positions
    }
}

let RegistrationFormRedux = compose(
    reduxForm({form: 'Registration'}),
    connect(mapStateToProps))
(registrationForm)


export default RegistrationFormRedux;