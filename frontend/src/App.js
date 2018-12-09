import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import NavBar from './Components/NavBar'
import People from './Components/People'
import Person from './Components/Person'
import Callback from './Callback'

import Landing from './Components/Landing/Landing'
import Header from './Components/Header'

import auth from './Auth0'

// const auth = new Auth();


class App extends Component {
  render() {
    return (
      <div id='AppWrapper'>
        <Route exact path="/" render={props => <Header auth={auth} {...props} />} />
        <Route exact path="/" render={props => <Landing auth={auth} {...props} />} />

        <Route path="/callback" render={(props) => {
            auth.handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />

        <div>
          {/* <Route path='/home' render={props => <NavBar auth={auth} {...props} />} /> */}
          <Route path='/home' render={props => <People auth={auth} {...props} />} />
          <Route exact path='/person/:personId' component={Person} />
          <Route exact path='/callback' component={Callback} />
        </div>
      </div>
    );
  }
}

export default App;
