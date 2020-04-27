import React, { Component } from "react";
import "./App.css";
import ValueList from "./ValueList"
import ValueForm from "./ValueForm";


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>essentialism</h1>
        <ValueList />
        <ValueForm />
      </div>
    );
  }
}


export default App;
