import React, { Component } from 'react'
import {Route, withRouter} from 'react-router-dom'
// import NavBar from './Components/NavBar'
// import People from './Components/People'
// import Person from './Components/Person'
import Callback from './Callback'

import Landing from './Components/Landing/Landing'
import Header from './Components/Header'
import auth from './Auth0'

import HomeLanding from "./Components/Home/HomeLanding"

// Takes in a Path, checkingSession, and component. If checkingSession is TRUE,
// will redirect to landing. Else, will return the component.
import SecuredRoute from './Components/SecuredRoute'
import CheckingSession from './CheckingSession'

class App extends Component {
  constructor(){
    super()
    this.state = {
      filler: false
    }
  }

  render() {
    return (
      <div id='AppWrapper'>
        <Route exact path="/" render={props => <Header auth={auth} {...props} />} />
        <Route exact path="/" render={props => <Landing auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {return <Callback {...props} />}} />

        <SecuredRoute path='/home' 
          checkingSession={CheckingSession}
          component={HomeLanding}
        />
          {/* <Route path='/home' render={props => <NavBar auth={auth} {...props} />} /> */}
          {/* <Route path='/home' render={props => <HomeLanding auth={auth} {...props} />} /> */}
          {/* <Route exact path='/person/:personId' component={Person} /> */}
          {/* <Route exact path='/callback' component={Callback} /> */}
 
      </div>
    );
  }
}

export default withRouter(App)
