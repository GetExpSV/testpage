import React from 'react';


export const MaxLengthString = (MaxLength) => (value) =>{
    if(value.length > MaxLength) return "Error";
    return undefined;
}

export const MinLengthString = (MinLength) => (value) =>{
    if(value.length < MinLength) return "Error";
    return undefined;
}

export const required = (value) => {
    if(value) return undefined;
    return "Error";
}

export const EmailValidate = (value) =>{
    let valid = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
    if(value.match(valid)){
        return undefined
    }
    else return "Error"
}

export const PhoneValidate = (value) =>{
    let valid = /^[\+]{0,1}380([0-9]{9})$/
    if(value.match(valid)){
        return undefined
    }
    else return "Error"
}

export const PhotoValidate = (value) =>{
    if(value.size> 5242880) return "Error";
    return undefined
}