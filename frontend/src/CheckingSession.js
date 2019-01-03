import React, { Component } from 'react'
import auth from './Auth0'

class CheckingSession extends Component {
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
}


export default CheckingSession