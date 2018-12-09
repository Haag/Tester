import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../Auth0'


function NavBar(props) {
   const signOut = () => {
      Auth.signOut()
      props.history.replace('/')
  }

  return (
      <nav className="navbar navbar-dark bg-primary fixed-top">
         <Link to="/" className="navbar-link">
            To ROOT
         </Link>
         
         <Link to="people" className="navbar-link">
            People
         </Link>
         <Link to="settings" className="navbar-link">
            Settings
         </Link>
         
         {!Auth.isAuthenticated() &&
            <button className="btn btn-dark" onClick={Auth.signIn}>Sign In</button> } 
         {Auth.isAuthenticated() &&
            <button className="btn btn-dark" onClick={() => {signOut()}}>Sign Out</button> }
        
      </nav>
  )
}


export default withRouter(NavBar)