import React, { useState } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import axios from 'axios';
import axiosWithAuth  from '../utils/axiosWithAuth';

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LoginForm = props => {

  const [credentials, setCredentials] = useState({

    username: '',
    password: ''

  });


const handleChanges = event => {
    setCredentials( {
          ...credentials,
            [event.target.name]: event.target.value
          } )
      }

const loginToApp = event => {
    event.preventDefault();
    axiosWithAuth().post('https://bw-essentialism-1.herokuapp.com/api/auth/login', credentials)
    .then(res => {
        console.log(res);
        window.localStorage.setItem('token', res.data.payload);
      props.history.push('/nextpage')
    })
    .catch(err => console.log(err))
  }



  // once user is logged in create a GET request with the below endpoint
  // `https://bw-essentialism-1.herokuapp.com/api/essentials/`


  return(
    <div>
      <form onSubmit={loginToApp}>
        <input name="username" type="text" onChange={handleChanges} />
        <input name="password" type="password" onChange={handleChanges} />
        <button>Login</button>
      </form>
    </div>
    )
  }


export default LoginForm;