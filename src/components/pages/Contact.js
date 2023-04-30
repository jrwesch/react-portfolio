import React, { useState } from "react";
import {validateEmail} from '../../utils/helpers';

const Contact = () => {

    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const {name, email, message} = formState;
    
   function handleChange(e) {
    if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        console.log(isValid);
        if (!isValid){
            setErrorMessage('Please enter a valid email');
        } else {
            setErrorMessage('');
        }
    } else {
        if (!e.target.value.length){
            setErrorMessage(`${e.target.name} is required`);
        } else {
            setErrorMessage('');
        }
    }
    if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value});
    }
   }; 

};



export default Contact;