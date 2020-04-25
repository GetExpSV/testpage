import React from 'react';
import style from './fieldComponent.module.css'

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

export let fieldRadio = ({input, meta, ...props}) => {
    return (
        <div>
            <label className={style.container}>
                <input type="radio" checked="checked" name="radio" {...input} {...meta} {...props}/>
                <span className={style.checkmark}></span>
            </label>
        </div>)
}