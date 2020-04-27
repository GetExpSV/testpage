import React from 'react';
import style from './fieldComponent.module.sass'

export let fieldComponentForm = (TypeComponent) => ({input, meta, ...props}) => {
    let error = meta.touched && meta.error;
    return (<div className={style.field__container}>
        <div>
            <TypeComponent className={error ? style.error__item :style.item} {...input} {...meta} {...props}/>
        </div>
        {error ? <div className={style.error__message}>{meta.error}</div> : ""}
    </div>)
}

export let fieldComponentFormPhone = (TypeComponent) => ({input, meta, ...props}) => {
    let error = meta.touched && meta.error;
    return (<div className={style.field__container}>
        <div>
            <TypeComponent className={error ? style.error__item :style.item} {...input} {...meta} {...props}/>
        </div>
        {error ? <div className={style.error__message}>{meta.error}</div> : <div className={style.detail}>Enter phone number in open format</div>}
    </div>)
}

export class FieldFileInput extends React.Component {
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
                <div className={style.file__container}>
                    <div className={style.file__text}>{this.state.fileName}</div>
                    <input className={style.fileItem}
                           type='file'
                           accept='.jpg, .jpeg'
                           onChange={this.onChange}
                           id="input"
                    />
                    <label htmlFor="input" className={style.label__item}>Browse</label>
                    {error ? <div className={""}>{meta.error}</div> : ""}
                </div>
            </div>
        )
    }
}

export let fieldRadio = ({input, meta, ...props}) => {
    return (
        <div>
            <label className={style.container}>
                <input type="radio" checked="checked" name="radio" {...input} {...meta} {...props}/>
                <span className={style.checkmark}></span>
            </label>
        </div>)
}