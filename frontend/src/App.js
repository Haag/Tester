import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import NavBar from './Components/NavBar'
import People from './Components/People'
import Person from './Components/Person'
import Callback from './Callback'

class App extends Component {
  render() {
    return (
      <div >
        APP.JS
        <NavBar />
        <Route exact path='/' component={People}/>
        <Route exact path='/person/:personId' component={Person} />
        <Route exact path='/callback' component={Callback} />
      </div>
    );
  }
}

export default App;
