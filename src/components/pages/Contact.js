import React, {useState} from 'react';
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
   function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
};


// backend setup for later
return (
    <section>
        <h2 className="section-header">Contact Me</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
            <label htmlFor="email">Email address:</label>
            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" rows="10" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
        )}
        <button type="submit">Submit</button>
        </form>
    </section>
);
};




export default Contact;