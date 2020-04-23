import React from "react";
import {fieldComponentForm} from "../../FieldComponents/fieldComponents";
import reg_class from "./Registration.module.css";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {compose} from "redux";

class FieldFileInput extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        const {input: {onChange}} = this.props
        onChange(e.target.files[0])
    }

    render() {
        const {input: {value}} = this.props
        const {input, label, required, meta,} = this.props
        return (
            <div><label>{label}</label>
                <div>
                    <input className={reg_class.fileItem}
                        type='file'
                        accept='.jpg, .png, .jpeg'
                        onChange={this.onChange}
                    />
                </div>
            </div>
        )
    }
}

let fieldComponent = fieldComponentForm("input");

let registrationForm = (props) => {
    let positionsRadio = props.positions.map(data=> <div className={reg_class.radioItem}>
        <Field component={"input"} name={"position"} type={"radio"} value={data.name}/>{data.name}
    </div>)
    return (<form onSubmit={props.handleSubmit} className={reg_class.formItem}>
        <div className={reg_class.item}>Name
            <div>
                <Field component={fieldComponent} name={"personName"} placeholder={"Your name"}/>
            </div>
        </div>
        <div className={reg_class.item}>Email
            <div>
                <Field component={fieldComponent} name={"email"} placeholder={"Your email"}/>
            </div>
        </div>
        <div className={reg_class.item}>Phone number
            <div>
                <Field component={fieldComponent} name={"phoneNumber"} placeholder={"+380 XX XXX XX XX"}/>
            </div>
            <div className={reg_class.detail}>Enter phone number in open format</div>
        </div>
        <div className={reg_class.item}>
            <div>Select your position</div>
            {positionsRadio}
        </div>
        <div className={reg_class.item}>Photo
            <div>
                <Field component={FieldFileInput} type={"file"} name={"photo"} />
            </div>
        </div>
        <button className={reg_class.singItem}>Sing up now</button>
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