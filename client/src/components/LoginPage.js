//This is the first page the user sees after leaving the marketing page
//User can either login or register from here (but only one is displayed at a time)

//components contained in LoginPage:
//LoginForm
//RegistrationForm

import React, {useState} from 'react';
import LoginForm from './LoginForm';
import styled from "styled-components";
import RegistrationForm from './RegistrationForm';
import { Tween, Timeline } from 'react-gsap';
import './LoginPage.css';
import axiosWithAuth from "../utils/axiosWithAuth";

const TopCard = styled.div`
  background-color: #C0C0C0;
  padding: 3%;
  color: #470B97;
  border-radius: 10px;
`;

const Tab = styled.div `
overflow: hidden;
background-color:  #C0C0C0;
width: 39.5%;
display: flex;
justify-content: space-around;
`

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function LoginPage(props) {

  const [active, setActive] = useState(true)

  const [credentials, setCredentials] = useState({

    username: '',
    password: ''

  });


const handleChanges = event => {
    setCredentials({
          ...credentials,
            [event.target.name]: event.target.value
          })
      }

const loginToApp = event => {
    event.preventDefault();
    axiosWithAuth().post('https://bw-essentialism-1.herokuapp.com/api/auth/login', credentials)
    .then(res => {
        console.log(res);
        window.localStorage.setItem('token', res.data.token);
        props.history.push('/essentials')
    })
    .catch(err => console.log(err), "A")
  }



  return (
    <div className='container'>
      <div className='toggle'>
        <Tab className="tab" >
            <button className={`Button ${ active ? 'active' : ''}`} onClick={() => setActive(true)} >Login</button>
            <button className={`Button ${active ? '' : 'active'}`} onClick={() => setActive(false)}>Register</button>
        </Tab>
      </div>

      


      <div>
          <div className="App">
            <header className="App-header">

              <TopCard>
                <h1>Essentialism inc.</h1>

                <div className={`loginCard ${active ?'activeTab':'tabContent'}`}>
                    <h5>Login Here</h5>

                    <div className="login">
                        <div>
                            <form onSubmit={loginToApp}>
                                <input name="username" type="text" onChange={handleChanges} />
                                <input name="password" type="password" onChange={handleChanges} />
                                <button>Login</button>
                            </form>
                        </div>
                    </div>

                </div>
                <div className={`loginCard ${active ?'tabContent':'activeTab'}`}>
                    <RegistrationForm setActive = {setActive} />
                </div>
              </TopCard>
            </header>
          </div>
        </div>
      <p>	&#9400; 2020, Essentialism inc.</p>
    </div>

  );
}


export default LoginPage;
