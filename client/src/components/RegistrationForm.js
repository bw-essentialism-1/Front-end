//This component is a form used for creating a new pair of login credentials for a user that does not have an account yet
//form should have validation visible to user

//Form inputs should include:
//username
//password
//submit button

//This component is a form used for creating new login credentials for
// a user who does not yet have an account.
//Form should have validation visible to user

//Form inputs should include:
//username
//password
//submit button

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  axiosWithAuth from '../utils/axiosWithAuth';
import * as yup from 'yup';

const initialFormErrors = {
  username: '',
  password: '',
}


const formSchema = yup.object({
  username: yup
    .string()
    .min(3, 'userame must be atleast 3 characters')
    .required('userName is required'),
  password: yup
    .string()
    .min(6, 'Password Must be at least 6 characters long')
    .required('Password is Required')
})

const RegistrationForm = props => {

console.log(props)

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',

    });

    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [formDisabled, setFormDisabled] = useState(true)

    const handleChanges = event => {

      const name = event.target.name
      const value = event.target.value

      yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      });

      setCredentials({
        ...credentials,
        [name]: value,
     })
  }

    const submitForm = event => {
      event.preventDefault();
      axiosWithAuth()
        .post('https://bw-essentialism-1.herokuapp.com/api/auth/register', credentials)
        .then(res => {
          console.log(res)
          props.setActive(true);
          })
        .catch(err => console.log(err));
    };

    useEffect(() => {
      formSchema.isValid(credentials)
        .then(valid => {
          setFormDisabled(!valid)
        })
    }, [credentials])

  return (
<>
<div className='errors'>
    <p>{formErrors.username}</p>
    <p>{formErrors.password}</p>
</div>
    
    <div>
      <form onSubmit={submitForm}>
        <div>Username:</div>
        <input name="username" type="text" value={credentials.username} onChange={handleChanges} />
        <div>Password: </div>
        <input name="password" type="password" value={credentials.password} onChange={handleChanges} />
        <br/>
        <button disabled={formDisabled}>Register</button>
      </form>
    </div>
</>
  );
}


export default RegistrationForm;
