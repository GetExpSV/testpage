import React from 'react';
import field_class from './fieldComponent.module.css'

export let fieldComponentForm = (TypeComponent) => ({input, meta, ...props}) => {
    let error = meta.touched && meta.error
    return (<div>
        <div>
            <TypeComponent className={field_class.item} {...input} {...meta} {...props}/>
        </div>
        {error ? <div className={""}>{meta.error}</div> : ""}
    </div>)
}