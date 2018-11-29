import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import auth0Client from '../Auth0'


function NavBar(props) {
   const signOut = () => {
      auth0Client.signOut()
      props.history.replace('/')
  }

  return (
      <nav className="navbar navbar-dark bg-primary fixed-top">
         <Link to="/" className="navbar-link">
            To ROOT
         </Link>
         
         {!auth0Client.isAuthenticated() &&
            <button className="btn btn-dark" onClick={auth0Client.signIn}>Sign In</button> } 
         {auth0Client.isAuthenticated() &&
            <button className="btn btn-dark" onClick={() => {signOut()}}>Sign Out</button> }
        
         <Link to="people" className="navbar-link">
            People
         </Link>
         <Link to="settings" className="navbar-link">
            Settings
         </Link>
      </nav>
  )
}


export default withRouter(NavBar)