import React, { Component } from 'react';

import People from './components/People'
import Card from './components/Card'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <People />
        <Card /> 

      </div>
    );
  }
}

export default App;
