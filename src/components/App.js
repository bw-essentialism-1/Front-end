import React, { useState, useEffect } from "react";
import "./App.css";
import LoginPage from "./LoginPage";
import axiosWithAuth from "../utils/axiosWithAuth"
import { Route } from "react-router-dom";
import ValueList from "./ValueList";
import PrivateRoute from "./PrviateRoute"
import MissionList from "./MissionList"
import ProjectList from "./ProjectList"
import NewComponent from "./NewComponent"


const App = () => {
  
    return (
      <div className="App">
        <Route exact path ="/" component={LoginPage}/>
        <PrivateRoute exact path="/essentials">

          <NewComponent/>
  
        </PrivateRoute>
      </div>
    );
  

}


export default App;
