import React, { Component } from 'react'
import {Route, withRouter} from 'react-router-dom'
// import NavBar from './Components/NavBar'
import People from './Components/People'
// import Person from './Components/Person'
import Callback from './Callback'

import Landing from './Components/Landing/Landing'
import Header from './Components/Header'
import auth from './Auth0'

import HomeLanding from "./Components/Home/HomeLanding"

import SecuredRoute from './Components/SecuredRoute'



class App extends Component {
  constructor(){
    super()
    this.state = {
      checkingSession: true
    }
  }

  async componentDidMount() {
    console.log("APP.JS Props", this.props)
    if(this.props.location.pathname === '/callback') {
      this.setState({checkingSession: false})
      return
    }
    try {
      await auth.silentAuth()
      this.forceUpdate()
    } catch (err) {
      if(err.error === 'login_required') return
      console.log(err.error)
    }
    this.setState({checkingSession:false})
  }


  render() {
    return (
      <div id='AppWrapper'>
      {/* <NavBar /> */}
        <Route exact path="/" render={props => <Header auth={auth} {...props} />} />
        <Route exact path="/" render={props => <Landing auth={auth} {...props} />} />

        <Route path="/callback" render={(props) => {
          console.log("HandleAuth", {...props})
            // auth.handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />

 
          {/* <SecuredRoute path='/home' 
            checkingSession={this.state.checkingSession}
            component={People}
          /> */}
          {/* <Route path='/home' render={props => <NavBar auth={auth} {...props} />} /> */}
          <Route path='/home' render={props => <HomeLanding auth={auth} {...props} />} />
          {/* <Route exact path='/person/:personId' component={Person} /> */}
          {/* <Route exact path='/callback' component={Callback} /> */}
 
      </div>
    );
  }
}

export default withRouter(App)
