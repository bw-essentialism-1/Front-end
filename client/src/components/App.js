import React, { useState, useEffect } from "react";
import "./App.css";
import LoginPage from "./LoginPage";
import axiosWithAuth from "../utils/axiosWithAuth"
import { Route } from "react-router-dom";
import ValueList from "./ValueList"


const App = () => {
  const [essentialsList, setEssentialsList] = useState([])

  const fetchEssentials = () => {
    axiosWithAuth().get("https://bw-essentialism-1.herokuapp.com/api/essentials/")
    .then(res => {
        console.log(res.data)
        setEssentialsList(res.data);
    })
    .catch(err => {
        console.log(err.response)
    })
}

useEffect(() => {
    fetchEssentials();
}, []);


  
    return (
      <div className="App">
        <h1>essentialism</h1>
        <LoginPage />
        
        <Route exact path="/essentials">
          <ValueList essentialsList={essentialsList}/>
        </Route>
      
      </div>
    );
  

}


export default App;
