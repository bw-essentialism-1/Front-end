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
import './LoginPage.css'

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

function LoginPage() {

  const [active, setActive] = useState(true)

  const TimelineComponent = () => (
    <Timeline
      target={
        <div>
          <div className="App">
            <header className="App-header">

              <TopCard>
                <h1>Essentialism inc.</h1>

                <div className={`loginCard ${active ?'activeTab':'tabContent'}`}>
                    <h5>Login Here</h5>

                    <div className="login">
                      <LoginForm />
                    </div>

                </div>
                <div className={`loginCard ${active ?'tabContent':'activeTab'}`}>
                    <RegistrationForm setActive = {setActive} />
                </div>
              </TopCard>
            </header>
          </div>
        </div>
      }
    >
      <Tween from={{ x: '-20px', opacity: .5 }} to={{ x: '0px' }} />
      <Tween from={{ opacity: .5 }} to={{ opacity: 1 }} />
    </Timeline>
  );


  return (
    <div className='container'>
      <div className='toggle'>
        <Tab className="tab" >
            <button className={`Button ${ active ? 'active' : ''}`} onClick={() => setActive(true)} >Login</button>
            <button className={`Button ${active ? '' : 'active'}`} onClick={() => setActive(false)}>Register</button>
        </Tab>
      </div>

      <TimelineComponent></TimelineComponent>
      <p>	&#9400; 2020, Essentialism inc.</p>
    </div>

  );
}


export default LoginPage;