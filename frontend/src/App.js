import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import IncorrectPath from './Components/IncorrectPath'
import Callback from './Callback'

import Stripe from './Components/Stripe/StripeCheckout'

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

    return (
      <div id='AppWrapper'>
        <Switch>
          <Route exact path="/" render={props => 
            <div> <HomeLanding auth={auth} {...props} /> <Landing auth={auth} {...props} /> </div> } />
          
          <Route path="/stripe" render={(props) => {return <Stripe {...props} />}} />
          <Route path="/callback" render={(props) => {return <Callback {...props} />}} />
          
          <SecuredRoute path='/home' component={Home} auth={auth} />

            {/* <SideBar /> */}
          {/* <Route component={IncorrectPath} /> */}
          
        </Switch>

 
      </div>
    );
  }
}

export default withRouter(App)
