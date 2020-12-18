import React, { Component } from "react"
import './App.css';
import Rushi from "./rushi";
import Shyam from "./shyam";

class App extends Component{
  render(){
    return (
      <div className="App">
          <Shyam/>
          <Rushi/>
      </div>
    );
  }
}

export default App;

//HOC ---> A higher order component is an adavanced technique in react for reusing component logic
  //A HOC is a function that take a component  and return  a new component
  //eg : const army = (men) => { training }


//Github link -- https://github.com/shyam-22/HOC-basic-Concept.git