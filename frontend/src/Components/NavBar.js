import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import auth from '../Auth0'


function NavBar(props) {
   const signOut = () => {
      auth.signOut()
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
         {console.log("NavBar TOKEN", auth.idToken)}
         {console.log("NavBar It authenticated", auth.isAuthenticated())}

        {!auth.isAuthenticated() &&
            <button className="btn btn-dark" onClick={auth.signIn}>Sign In</button>          
        }
        {
            auth.isAuthenticated() &&
            <div>
                <label className="mr-2 text-white">{auth.getProfile().name}</label>
                <button className="btn btn-dark" onClick={() => {signOut()}}>Sign Out</button>
            </div>
        }
      </nav>
  )
}


export default withRouter(NavBar)