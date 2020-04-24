import React from 'react';
import field_class from './fieldComponent.module.css'

export let fieldComponentForm = (TypeComponent) => ({input, meta, ...props}) => {
    let error = meta.touched && meta.error;
    return (<div>
        <div>
            <TypeComponent className={field_class.item} {...input} {...meta} {...props}/>
        </div>
        {error ? <div className={""}>{meta.error}</div> : ""}
    </div>)
}

export let fieldRadio = ({input, meta, ...props}) => {
    return (
        <div>
            <label className={field_class.container}>
                <input type="radio" checked="checked" name="radio" {...input} {...meta} {...props}/>
                <span className={field_class.checkmark}></span>
            </label>
        </div>)
}