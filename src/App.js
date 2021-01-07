import React, { Component } from 'react';
import Todos from './Todos'
import Navbar from './Navbar'
import './App.css';



class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar />
        <Todos />
      </div>
    );
  }
}

export default App;
