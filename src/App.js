import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Stock from './Stock';
import Blacksholes from './Blacksholes';

class App extends Component {
  render() {
    return (
      <div>
        <Stock/>
      </div>
    );
  }
}

export default App;
