import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import auth0Client from '../../Auth0'
import AuthService from './AuthService'


const SecretRoute = ({ component: Component, ...rest }) => (

   console.log('component', auth0Client),
   
   <Route 
   {...rest} 
   render={(props) => (
         // console.log('Token', auth0Client.idToken),
  
         AuthService.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/',
            // state: { from: props.location },
          }} />
    )} />
  );

  export default SecretRoute