import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import IncorrectPath from './Components/IncorrectPath'
import Callback from './Callback'

import Landing from './Components/Landing/Landing'
import auth from './Auth0'

import HomeLanding from "./Components/Home/HomeLanding"
import Home from './Components/Home/Home'
// Takes in a Path, checkingSession, and component. If checkingSession is TRUE,
// will redirect to landing. Else, will return the component.
import SecuredRoute from './Components/SecuredRoute'
class App extends Component {
  constructor(){
    super()
    this.state = {
      filler: false
    }
  }
  render() {
    console.log("AUTH PROF", auth.getProfile())
    return (
      <div id='AppWrapper'>
        <Switch>
          <Route exact path="/" render={props => 
            <div> <HomeLanding auth={auth} {...props} /> <Landing auth={auth} {...props} /> </div> } />
          
          <Route path="/callback" render={(props) => {return <Callback {...props} />}} />
          
          <SecuredRoute path='/home' component={Home} auth={auth} />
            {/* <SideBar /> */}
          {/* <Route component={IncorrectPath} /> */}
          
        </Switch>
          {/* <Route path='/home' render={props => <NavBar auth={auth} {...props} />} /> */}
          {/* <Route path='/home' render={props => <HomeLanding auth={auth} {...props} />} /> */}
          {/* <Route exact path='/person/:personId' component={Person} /> */}
          {/* <Route exact path='/callback' component={Callback} /> */}
 
      </div>
    );
  }
}

export default withRouter(App)
