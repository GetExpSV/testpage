import React, {useState} from "react";
import {fieldComponentForm, fieldRadio} from "../../FieldComponents/fieldComponents";
import reg_class from "./Registration.module.css";
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

class FieldFileInput extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    state = {
        fileName: "Upload your photo"
    }

    onChange(e) {
        const {input: {onChange}} = this.props
        onChange(e.target.files[0])
        this.setState({fileName: e.target.files[0].name})
    }

    render() {
        const {input: {value}} = this.props;
        const {input, label, required, meta,} = this.props;
        let error = meta.touched && meta.error;
        return (
            <div><label>{label}</label>
                <div className={reg_class.file__container}>
                    <div className={reg_class.file__text}>{this.state.fileName}</div>
                    <input className={reg_class.fileItem}
                        type='file'
                        accept='.jpg, .jpeg'
                        onChange={this.onChange}
                        id="input"
                    />
                    <label htmlFor="input" className={reg_class.labelItem}>Browse</label>
                    {error ? <div className={""}>{meta.error}</div> : ""}
                </div>
            </div>
        )
    }
}

let fieldComponent = fieldComponentForm("input");

let minLength = MinLengthString(2);
let maxLength = MaxLengthString(60);

let registrationForm = (props) => {
    let positionsRadio = props.positions.map(data=> <div className={reg_class.radioItem}>
        <Field component={fieldRadio} name={"position"} type={"radio"} value={data.name}/>
        <span className={reg_class.radio__name}>{data.name}</span>
    </div>)

    return (<form onSubmit={props.handleSubmit} className={reg_class.formItem}>
        <div className={reg_class.item}>Name
            <div>
                <Field component={fieldComponent} name={"personName"} placeholder={"Your name"}
                       validate={[required, minLength, maxLength]}/>
            </div>
        </div>
        <div className={reg_class.item}>Email
            <div>
                <Field component={fieldComponent} name={"email"} placeholder={"Your email"}
                validate={[required, EmailValidate]}/>
            </div>
        </div>
        <div className={reg_class.item}>Phone number
            <div>
                <Field component={fieldComponent} name={"phoneNumber"} placeholder={"+380 XX XXX XX XX"}
                validate={[required, PhoneValidate]}/>
            </div>
            <div className={reg_class.detail}>Enter phone number in open format</div>
        </div>
        <div className={reg_class.item}>
            <div>Select your position</div>
            {positionsRadio}
        </div>
        <div className={reg_class.item}>Photo
            <div>
                <Field component={FieldFileInput} name={"photo"} validate={[required, PhotoValidate]}/>
            </div>
        </div>
        <div onClick={props.handleSubmit} className={reg_class.singItem}>Sing up now</div>
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