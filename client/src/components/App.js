import React, { useState, useEffect } from "react";
import "./App.css";
import LoginPage from "./LoginPage";
import axiosWithAuth from "../utils/axiosWithAuth"
import { Route } from "react-router-dom";
import ValueList from "./ValueList";
import PrivateRoute from "./PrviateRoute"
import MissionList from "./MissionList"
import ProjectList from "./ProjectList"


const App = () => {
  
    return (
      <div className="App">
        <Route exact path ="/" component={LoginPage}/>
        <PrivateRoute exact path="/essentials">
          <div className="listContainer">
            <div className="valueContainer">
              <ValueList />
            </div>
            <div className="projectContainer">
            <ProjectList/>
            </div>
            <div className="missionContainer">
              <MissionList/>
            </div>
          </div>
         <YOUR-COMPONENT/>
        </PrivateRoute>
      </div>
    );
  

}


export default App;
