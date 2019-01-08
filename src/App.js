import React, { Component } from 'react';
import ReduxDemo from './ReduxDemo';
import Home from './Home';
import RouterDemo from './RouterDemo';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName:"Viji",
      age: 23
    }
  };
  render() {    
    const user = {
      name: "Vetri",
      age: 30
    }
    setTimeout(
      () =>{ 
        this.setState({userName: "VijiVel"});
      }, 1000);      
    
    return (
      <div>
        <RouterDemo/>
        <ReduxDemo />
        <div><h1>{this.state.userName}</h1><h2>{this.state.age}</h2></div>
        <Home name={user.name} age={user.age}></Home>
      </div>
    );
  }
}

export default App;
